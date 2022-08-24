import styled from "styled-components";

export const PerPageStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 10px 0;
`;
export const TextStyles = styled.span`
    margin-right: 10px;
    color: ${(props) => props.theme.textColor};
`;
