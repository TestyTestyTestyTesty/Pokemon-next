import styled from "styled-components";
type Props = {
    showImage: Boolean;
};
export const ImageWrapperStyles = styled.div<Props>`
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
        transition: all 0.3s;
        filter: ${(props) =>
            props.showImage ? "brightness(1)" : "brightness(0)"};
    }
`;
