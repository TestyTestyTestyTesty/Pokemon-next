import styled from "styled-components";

export const ScrollTopStyles = styled.div`
  position: fixed;
  bottom:10vh;
  right: 5vw;
  background:${props => props.theme.mainInverted};
  color:${props => props.theme.main};
  width:50px;
  height:50px;
  border-radius:5000px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
  margin:0;
  padding:0;
`;
