import React from "react";

import Dot from "../Dot/Dot";
import { DotsListStyled, DotContainerStyled } from "./DotsList.styles";
import { IDotsList } from "./DotsList.types";

function DotsList({ activeIndex, items, dotsColor }: IDotsList): JSX.Element {
  const dots: React.ReactElement[] = [];

  for (const [index] of items.entries()) {
    dots.push(
      <Dot
        key={`dot-${index}`}
        active={activeIndex - 1 === index}
        color={dotsColor}
      />,
    );
  }
  return (
    <DotsListStyled>
      <DotContainerStyled>{dots}</DotContainerStyled>
    </DotsListStyled>
  );
}

DotsList.defaultProps = {
  activeIndex: 1,
  items: [],
  dotsColor: "#FFFFFF",
};

export default DotsList;
