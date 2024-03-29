import styled from "styled-components";

export const HeaderStyles = styled.div`
    margin: 50px auto 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    a {
        cursor: pointer;
    }
`;
export const LinkStyles = styled.a`
    padding: 5px 10px;
    border: 1px solid ${(props) => props.theme.borderColor};
    color: ${(props) => props.theme.textColor};
    margin: 5px;
    cursor: pointer;
    transition: all 0.3s;
    flex: 1 0 auto;
    text-align: center;
`;
export const NavLinksStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
