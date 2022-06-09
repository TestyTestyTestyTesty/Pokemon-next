import styled from "styled-components";

type Props = {
  activePath: Boolean
}
export const GenerationListStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: center;
  list-style-type: none;
  margin: 20px 0;
  padding: 0;
`;
export const GenerationListItemStyles = styled.li`
  display: flex;
`;
export const LinkStyles = styled.a<Props>`
  background: ${({ activePath,theme }) => (activePath ? theme.mainInverted : theme.main)};
  padding: 5px 10px;
  border: 1px solid ${props => props.theme.mainInverted};
  color:${props => props.theme.textColor};
  margin: 5px;
  cursor: pointer;
  transition: all 0.3s;
  flex: 1 0 auto;
  text-align: center;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;
