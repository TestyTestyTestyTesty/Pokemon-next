import styled from "styled-components";

export const PokemonListItemStyles = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props) => props.theme.borderColor};
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        background: rgba(0, 0, 0, 0.05);
    }
    p {
        margin: 5px 0;
        color: ${(props) => props.theme.textColor};
    }
    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
