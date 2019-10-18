import { animated } from "react-spring";
import Container from "../Common/Container";
import styled from "styled-components";
import colors from "../../shared/colors";
import breakpoints from "../../shared/breakpoints";

export const HomeContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 100vh;
  margin-bottom: 0rem;

  ${breakpoints.tablet} {
    margin-bottom: 0rem;
  }

  ${breakpoints.desktop} {
    margin-bottom: 0rem;
  }
`;

export const Text = styled(animated.div)`
  p {
    margin-top: 2rem;
    color: ${colors.blue};
  }
`;

export const Image = styled(animated.div)`
  position: absolute !important;
  bottom: 0;
  right: 0;
  width: 80%;

  .gatsby-image-wrapper {
    position: absolute !important;
    bottom: 0;
    right: 0;
    width: 100%;
  }

  ${breakpoints.desktop} {
    width: 40%;
  }
`;
