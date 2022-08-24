import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

export const ThemeTogglerStyles = styled.div`
    span {
        margin: 20px;
        font-size: 30px;
        ${mediaQueries.sm} {
            font-size: 50px;
        }
    }
`;
