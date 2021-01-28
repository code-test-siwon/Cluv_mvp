import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles2 = createGlobalStyle`
    ${reset};
    
    /* Global */

    :root {
    /* dark Color */
    --color-d1: #292929;
    --color-d2: #585858;
    --color-d3: #FFc815;
    --color-d4: white;
    --color-d5: black;
    --color-d6 : #dbdbdb;
    

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

    /* Typography */

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
        background: #494949;
        color:white;
        padding-top:50px;
    }
`;

export default globalStyles2;
