import styled from "styled-components";
import {mediaQueries} from "./mediaQueries";
export const ContainerStyles = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;

export const TitleStyles = styled.h2`
margin: 0;
  text-align: center;
`;
export const WrapperStyles = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${mediaQueries.s600}{
    flex-direction: row;
  }
`;
export const SinglePokemonStyles = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 20px 0;
  position: relative;
  ${mediaQueries.s600}{
    margin: 0 30px;
  }
  ${mediaQueries.xl}{
    margin: 0 50px;
  }
`;
export const NameStyles = styled.h3`
  margin: 0 auto;
  text-align: center;
`;
export const NumberStyles = styled.h4`
  margin: 0 auto;
  text-align: center;
`;
