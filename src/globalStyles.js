import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

const GlobalStyle = createGlobalStyle`
  :root {
    // https://coolors.co/606c38-283618-fefae0-dda15e-bc6c25
    --color-primary: #FEFAE0;
    --color-secondary: #606C38;
    --color-tertiary: #283618;
    --color-quaternary: #DDA15E;
    --color-quinary: #BC6C25;
    --color-senary: #4361ee;
    --color-septenary: #d00000;
    --color-black: #021526;
    --color-grey: #bdbdbd;

    --c-success: var(--color-secondary);
    --c-danger: var(--color-septenary);
    --c-action: var(--color-senary);
    --c-info: var(--color-quaternary);
    --c-muted: var(--color-grey);
    --c-accent: var(--color-quinary);
    --c-disabled: var(--color-grey);
    --c-text: var(--color-black);
    --c-text--inverse: var(--color-primary);

    --c-bg: var(--color-primary);
    --c-bg--inverse: var(--color-tertiary);
    
    --color-intent-bg: linear-gradient(
              180deg,
              rgba(129, 134, 140, 0.52) 0%,
              rgba(57, 58, 63, 0.59) 25%,
              #393a3f 100%
            ),
            #393a3f;
    --color-intent-text: #fff;
    --size-global-horizontal-bleed: 20px;
    --content-container-width: 680px;


    --size-base: 14px;
    --size-xxs: 0.296rem;
    --size-xs: 0.444rem;
    --size-s: 0.667rem;
    --size: 1rem;
    --size-m: 1.5rem;
    --size-l: 2.25rem;
    --size-xl: 3.375rem;
    --size-xxl: 5.063rem;
    --size-huge: 7.594rem;

    --radius-s: 4px;
    --radius-m: 8px;
    --radius-l: 16px;

    // NOTE: https://type-scale.com/?size=14&scale=1.333&text=A%20Visual%20Type%20Scale&font=Roboto&fontweight=400&bodyfont=body_font_default&bodyfontweight=400&lineheight=1.75&backgroundcolor=%23ffffff&fontcolor=%23000000&preview=false
    --f-size-base: 14px;
    --f-size-xxs: 0.563rem;
    --f-size-xs: 0.75rem;
    --f-size: 1rem;
    --f-size-m: 1.333rem;
    --f-size-l: 1.777rem;
    --f-size-xl: 2.369rem;
    --f-size-xxl: 3.157rem;
    --f-size-huge: 4.209rem;

    ${media.greaterThan("medium")`
    --size-base: 16px;
    --size-xxs: 0.236rem;
    --size-xs: 0.382rem;
    --size-s: 0.618rem;
    --size-m: 1.618rem;
    --size-l: 2.618rem;
    --size-xl: 4.236rem;
    --size-xxl: 6.854rem;
    --size-huge: 11.089rem;

    --f-size-base: 16px;
  `}
  }

  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
    font-size: var(--f-size-base, 16px);
  }

  html, body {
    height: 100%;
  },

  body {
    color: var(--c-text);
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
  }

  body, #root, .App {
    height: 100%;

    > div {
      height: 100%;
    }
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    color: var(--color-action);
  }

  // GENERAL
  #root {
    height: 100%;
  }

  .App {
    background: #283618;
    background: radial-gradient(circle, rgba(20,51,38,1) 0%, rgba(27,67,50,1) 100%);
    height: 100%;
    color: var(--c-text);
  }
`;

export default GlobalStyle;
