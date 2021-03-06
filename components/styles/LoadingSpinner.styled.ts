import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const LoadingSpinnerStyles = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 40px;
  height: 40px;
  &:after {
    content: " ";
    display: block;
    width: 32px;
    height: 32px;
    margin: 4px;
    border-radius: 50%;
    border: 3px solid ${props => props.theme.mainInverted};
    border-color: ${props => props.theme.mainInverted} transparent ${props => props.theme.mainInverted} transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;
