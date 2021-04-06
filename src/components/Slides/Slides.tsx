import { useCallback, useEffect, useRef, useState } from "react";
import { useSprings } from "react-spring";
import { useDrag } from "react-use-gesture";

import DotsList from "../DotsList/DotsList";
import { SlidesStyled, SlideStyled } from "./Slides.styles";
import { ISlides } from "./Slides.types";
import { clamp } from "../../utils/number.helpers";

function Slides({
  children,
  width,
  items,
  itemsGap,
  style,
  mass,
  tension,
  friction,
  dotsColor,
  disableDots,
  onSlideChange,
}: ISlides): JSX.Element {
  const containerWidth = width;
  const itemsSize = items.length;
  const containerPadding = containerWidth * itemsGap * 2;
  const itemWidth = containerWidth - containerPadding * 2;
  const itemGap = containerPadding / 2;

  function calcInitialPos(i: number) {
    return (itemWidth + itemGap) * i + containerPadding;
  }

  // Save a ref for current slide
  const slide = useRef(0);

  // Create an accessible way to know the current index
  const [activeIndex, setActiveIndex] = useState(slide.current + 1);

  // Configure springs to animate the slides with transitions in x
  const [springs, setSprings] = useSprings(itemsSize, (i) => ({
    x: calcInitialPos(i),
    config: { mass, tension, friction },
  }));

  // Optimize function called while user does a drag gesture
  const dragCallback = useCallback(
    (active, cancel, distance, xDir, xMov) => {
      if (active && distance > containerWidth / 2) {
        slide.current = clamp(
          slide.current + (xDir > 0 ? -1 : 1),
          0,
          itemsSize - 1,
        );
        cancel();
      }

      setActiveIndex(slide.current + 1);

      // @ts-ignore
      setSprings((i) => ({
        x:
          (i - slide.current) * (itemWidth + itemGap) +
          (active ? xMov : 0 + containerPadding),
      }));
    },
    [containerWidth, setSprings, itemsSize],
  );

  // Creates a Drag binding that is used by the main slides element
  const bindDrag = useDrag(
    ({
      // active,
      cancel,
      direction: [xDir],
      distance,
      active,
      movement: [xMov],
      vxvy: [vx],
    }) => {
      vx && dragCallback(active, cancel, distance, xDir, xMov);
    },
    {
      useTouch: true,
    },
  );

  useEffect(() => {
    // @ts-ignore
    setSprings((i) => ({ x: calcInitialPos(i) }));
  }, [width, itemsGap]);

  useEffect(() => {
    onSlideChange(items[activeIndex - 1], activeIndex);
  }, [activeIndex]);

  return (
    <SlidesStyled
      {...bindDrag()}
      style={{ ...style, width: `${containerWidth}px` }}
    >
      {springs.map(({ x }, i) => (
        <SlideStyled
          key={`slide-${i}`}
          style={{
            width: `${itemWidth}px`,
            transform: x.interpolate((x) => `translate3d(${x}px, 0, 0)`),
          }}
        >
          {children(
            items[i],
            {
              next: () => {
                if (activeIndex < itemsSize) {
                  slide.current = activeIndex;
                  setActiveIndex(slide.current + 1);
                  // @ts-ignore
                  setSprings((i) => ({
                    x:
                      (i - slide.current) * (itemWidth + itemGap) +
                      containerPadding,
                  }));
                }
              },
              prev: () => {
                if (activeIndex > 1) {
                  slide.current = slide.current - 1;
                  setActiveIndex(slide.current + 1);
                  // @ts-ignore
                  setSprings((i) => ({
                    x:
                      (i - slide.current) * (itemWidth + itemGap) +
                      containerPadding,
                  }));
                }
              },
            },
            i,
          )}
        </SlideStyled>
      ))}
      {disableDots ? null : (
        <DotsList
          activeIndex={activeIndex}
          items={items}
          dotsColor={dotsColor}
        />
      )}
    </SlidesStyled>
  );
}

Slides.defaultProps = {
  width: 480, // Width of the slider main element
  itemsGap: 0.035, // Padding percentage on each side of the active item,
  mass: 1,
  tension: 500,
  friction: 50,
  dotsColor: "#ffffff",
  disableDots: false,
  active: 1,
  onSlideChange() {},
};

export default Slides;
