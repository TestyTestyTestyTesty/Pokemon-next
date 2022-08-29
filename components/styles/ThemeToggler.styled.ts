import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

export const ThemeTogglerStyles = styled.div`
    cursor: pointer;
    span {
        margin: 20px;
        font-size: 30px;
        user-select: none;
        ${mediaQueries.sm} {
            font-size: 50px;
        }
    }
`;
