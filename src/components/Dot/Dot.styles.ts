import styled from "styled-components";
import { animated } from "react-spring";

import { IDot } from "./Dot.types";

export const DotStyled = styled(animated.div)`
  border-radius: 99px;
  background-color: ${({ color }: IDot) => color || "#ffffff"};
  width: 5px;
  height: 5px;
  margin: 0.3rem;
`;
