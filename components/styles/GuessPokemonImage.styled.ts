import styled from "styled-components";

export const ImageWrapperStyles = styled.div`
    margin: 20px 0 auto;
    background: url("/assets/guessBg.jpg");
    background-size: contain;
    background-position: 63% 50%;
    background-repeat: no-repeat;
    height: 100%;
    width: auto;
    display: flex;
    justify-content: center;
    & > span {
        filter: brightness(0);
    }
`;
