import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({theme}) => theme.textColorBase};
}
  /* NextJS */
html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
}
body {
    display: flex;
    flex: 1;
}
#__next {
    display: flex;
    flex: 1;
}
  /* Globals */
button,
a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
    opacity: .5;
    }
}
.viImg {
  border-radius: 5%;
}
* {
  outline: 0;
  scrollbar-color: #000 transparent;
  scrollbar-width: thin;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 3px solid transparent;
    background: #000;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
}
`;