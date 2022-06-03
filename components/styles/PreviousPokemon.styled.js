import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

export const LinkStyles = styled.div`
  position:fixed;
  top:20vh;
  left:0;
  display: flex;
  align-items: center;
  justify-content: center;
  background:black;
  color:white;
  height: 45px;
  width: 100px;
  cursor:pointer;
  text-align: center;
  ${mediaQueries.s600}{
    width: 150px;
  }
`;

