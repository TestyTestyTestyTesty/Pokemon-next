import styled from "styled-components";

const handleColorType = (color: string) => {
  switch (color) {
    case "bug":
      return "#A7B720";
    case "dark":
      return "#6E5747";
    case "dragon":
      return "#6F37F8";
    case "electric":
      return "#F7CF2F";
    case "fairy":
      return "#FDADC8";
    case "fighting":
      return "#BF2F27";
    case "fire":
      return "#EF7E2E";
    case "flying":
      return "#A78FEF";
    case "ghost":
      return "#6F5697";
    case "grass":
      return "#77C74E";
    case "ground":
      return "#DFBF68";
    case "ice":
      return "#97D7D7";
    case "normal":
      return "#A8A777";
    case "poison":
      return "#9F3FA0";
    case "psychic":
      return "#F75787";
    case "rock":
      return "#B69F37";
    case "steel":
      return "#B7B7CF";
    case "water":
      return "#678fef";
    case "unknown":
      return "#0f0";
    case "shadow":
      return "#000";
    default:
      return "#fff";
  }
};
type Props = {
  color:string,
  activePath?: boolean
}
export const TypesStyles = styled.div`
  display: flex;
`;
export const TypeStyles = styled.span<Props>`
  background: ${({ color }) => handleColorType(color)};
  color: white;
  padding: 10px 30px;
  margin: 0 5px;
  cursor: pointer;
  border: 1px solid
    ${({ activePath, theme }) => (activePath ? theme.mainInverted : theme.main)};
`;
