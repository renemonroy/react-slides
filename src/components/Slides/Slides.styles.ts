import styled from "styled-components";
import { animated } from "react-spring";

export const SlidesStyled = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const SlideStyled = styled(animated.div)`
  position: absolute;
  height: 100%;
  will-change: transform;
`;
