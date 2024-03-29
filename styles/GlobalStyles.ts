import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
  background: ${(props) => props.theme.main};
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
#nprogress .bar {
  height:5px;
  background: red;
}
`;
