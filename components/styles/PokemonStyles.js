import styled from "styled-components";

export const PokemonStyles = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border:1px solid rgba(0,0,0,.1);
  cursor:pointer;
  transition: all 0.3s;
  &:hover{
    background: rgba(0,0,0,.05)
  }
  p{
    margin: 5px 0;
  }
`;


