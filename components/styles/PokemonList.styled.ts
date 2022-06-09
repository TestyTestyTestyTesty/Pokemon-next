import styled from "styled-components";
import {mediaQueries} from "./mediaQueries"
export const PokemonListStyles = styled.div`
  display:grid;
  grid-gap:20px;
  margin:40px 10px;
  grid-template-columns: 1fr;
  ${mediaQueries.s600}{
    grid-template-columns: 1fr 1fr;
  }
  ${mediaQueries.lg}{
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${mediaQueries.xl}{
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

