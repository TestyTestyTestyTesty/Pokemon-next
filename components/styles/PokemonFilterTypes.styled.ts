import styled from "styled-components";
export const WrapperStyles = styled.div`
  display: flex;
  justify-content: center;
`;
export const LinkStyles = styled.a`
  background: ${({ color }) => (color ? color : "white")};
  padding: 5px 10px;
  border: 1px solid black;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s;
`;
