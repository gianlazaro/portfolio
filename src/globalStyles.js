import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Public Sans';
    font-smoothing: antialiased;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: var(--bgColor);
    color: var(--textColor);
    padding-top: 5%;
  }

  @media (max-width: 500px) {
    li:hover {
      background: red;
      color: inherit; }
  }


  @media (prefers-color-scheme: light) {
    :root {
      --bgColor: #f2f2f2;
      --textColor: #1a1a1a;
      --linkColor: blue;
      --emColor: #907D28;
      --miscBorderColor: #ccc;
      --linkHoverColor: darkblue;
      --email: #1d1d1d;
      --emailHover: blue;
      --emailBorder: #bbb;
      --blockHighlight: #fff;
      --linkWrapperColor: #1a1a1a;
      --listHover: #e9e9e9;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bgColor: #1a1a1a;
      --textColor: #ddd;
      --linkColor: #0070E0;
      --linkHoverColor: #1F8FFF;
      --linkTextColor: #1a1a1a;
      --emColor: #B59C31;
      --miscBorderColor: #444;
      --headerSectionColor: #fff;
      --email: white;
      --emailHover: #0070E0;
      --emailBorder: #555;
      --blockHighlight: #222;
      --linkWrapperColor: #e1e1e1;
      --listHover: #222;
    }
  }
`;


export default GlobalStyle;
