import styled from "styled-components";
export const GenerationListStyles = styled.ul`
  margin: 50px auto;
  display: flex;
  justify-content: center;
  list-style-type: none;
`;
export const LinkStyles = styled.a`
  background: ${({ activePath }) => (activePath ? "palevioletred" : "white")};
  padding: 5px 10px;
  border: 1px solid black;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;
