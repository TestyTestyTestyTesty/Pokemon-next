import styled from "styled-components";

export const FavouriteButtonStyles = styled.button`
  background: yellow;
  color: black;
  padding: 5px 10px;
  text-align: center;
  cursor:pointer;
  &:disabled{
    background: red;
  }
`;
