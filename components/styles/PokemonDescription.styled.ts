import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";
export const TopWrapperStyles = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 20px;
`;
export const TitleStyles = styled.h2`
    color: ${(props) => props.theme.textColor};
`;
