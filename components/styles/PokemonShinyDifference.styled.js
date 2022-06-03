import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

export const ContainerStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  flex-direction: column;
  ${mediaQueries.s600}{
    flex-direction: row;
  }
`;

export const SinglePokemonStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;
export const SinglePokemonWrapperStyles = styled.div`
  display: flex;
`;
export const VersionStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;
export const GenderNameStyles = styled.h2`
  text-align: center;
  margin: 10px 0 0;
`;
export const VersionNameStyles = styled.h3`
  text-align: center;
  margin: 10px 0 0;
`;
