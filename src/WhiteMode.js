import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};

    :root {
    /* White Color */
    --color-w1: #00af91;
    --color-w2: #585858;
    --color-w3: #f58634;
    --color-w4: white;
    --color-w5: black;
    --color-w6: #ffcc29;    

    /* Font size */
    --font-large: 48px;
    --font-medium: 28px;
    --font-regular: 18px;
    --font-small: 16px;
    --font-micro: 14px;

    /* Font weight */
    --weight-bold: 700;
    --weight-semi-bold: 600;
    --weight-regular: 400;
    }

    * Typography */

    h1 {
    font-size: var(--font-large);
    font-weight: var(--weight-bold);
    color: var(--color-black);
    margin: 16px 0px;
    }

    h2 {
    font-size: var(--font-medium);
    font-weight: var(--weight-semi-bold);
    color: var(--color-black);
    margin: 8px 0;
    }

    h3 {
    font-size: var(--font-regular);
    font-weight: var(--weight-regular);
    color: var(--color-black);
    margin: 8px 0;
    }

    p {
    font-size: var(--font-regular);
    font-weight: var(--weight-regular);
    color: var(--color-black);
    margin: 4px 0;
    }

    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        
        color:white;
        padding-top:50px;
    }
`;

export default globalStyles;
