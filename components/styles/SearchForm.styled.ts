import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";
export const FormStyles = styled.form`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
`;
export const LabelStyles = styled.label`
  text-align: center;
  margin: 0 0 10px;
`;
export const InputWrapperStyles = styled.div`
  text-align: center;
  margin: 0 0 10px;
`;
export const InputStyles = styled.input.attrs({ type: "text" })`
  padding:10px 20px;
  height:40px;
  `;
export const SubmitStyles = styled.input.attrs({ type: "submit" })`
  padding:10px 20px;
  height:40px;
  border:1px solid black;
  background:white;
  cursor:pointer;
`;
