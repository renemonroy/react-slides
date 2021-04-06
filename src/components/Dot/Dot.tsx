import { useSpring } from "react-spring";

import { DotStyled } from "./Dot.styles";
import { IDot } from "./Dot.types";

function Dot({ active, color }: IDot) {
  const { transform, opacity } = useSpring({
    opacity: active ? 1 : 0.8,
    transform: active ? `scale(1.5)` : `scale(1)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <DotStyled
      color={color}
      style={{ opacity: opacity.interpolate((o) => o), transform }}
    />
  );
}

Dot.defaultProps = {
  color: "#FFFFFF",
  active: false,
};

export default Dot;
