import styled from "styled-components";
import {mediaQueries} from "./mediaQueries";
type Props = {
  next?: boolean,
  previous?: boolean
}
export const LinkStyles = styled.div<Props>`
  position:fixed;
  top:20vh;
  ${({ next }) => next && `
    right:0;
  `}
  ${({ previous }) => previous && `
    left:0;
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  background:${props => props.theme.mainInverted};
  color:${props => props.theme.main};
  height: 45px;
  width: 100px;
  cursor:pointer;
  text-align: center;
  ${mediaQueries.s600}{
    width: 150px;
  }
`;

