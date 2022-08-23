import styled from "styled-components";

export const FormStyles = styled.form`
    display: flex;
    justify-content: center;
    margin: 10px 0;
`;

export const InputStyles = styled.input.attrs({ type: "text" })`
    padding: 10px 20px;
    height: 40px;
`;
export const SubmitStyles = styled.input.attrs({ type: "submit" })`
    padding: 10px 20px;
    height: 40px;
    border: 1px solid black;
    background: white;
    cursor: pointer;
`;
