import "styled-components";
import { DefaultTheme } from "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    main: string;
    mainInverted: string;
    borderColor: string;
    textColor: string;
  }
}

export const themeLight: DefaultTheme = {
  main: "#fff",
  mainInverted: "#000",
  borderColor: "rgba(0,0,0,.1)",
  textColor: "#000",
};
export const themeDark = {
  main: "#000",
  mainInverted: "#fff",
  borderColor: "rgba(255,255,255,.1)",
  textColor: "#fff",
};
