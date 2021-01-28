import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};

    :root {
    /* White Color */
    --color-1: white;
    --color-2: #298042;
    --color-3: #f58634;
    --color-4: black;
    --color-5: white;
    --color-6: #ffcc29;

    --color-bg :#ede8e8 ;

    /* Font size */
    --font-1 : 1.5rem;
    --font-2 : 1.3rem;
    --font-3 : 1.1rem;
    --font-4 : 0.8rem;
    --font-5 : 0.5rem;
    --font-6 : 0.2rem;
    --font-extrem: 5rem;
    --font-ultra : 3rem;
    --font-super : 2rem;
    --font-large: 48px;
    --font-medium: 28px;
    --font-regular: 18px;
    --font-small: 16px;
    --font-micro: 14px;
    --font-nano : 8px;


    /* Font weight */
    --weight-bold: 700;
    --weight-semi-bold: 600;
    --weight-regular: 400;
    }

    * Typography */

    h1 {
    font-size: var(--font-large);
    font-weight: var(--weight-bold);
    color: var(--color-5);
    margin: 16px 0px;
    }

    h2 {
    font-size: var(--font-medium);
    font-weight: var(--weight-semi-bold);
    color: var(--color-5);
    margin: 8px 0;
    }

    h3 {
    font-size: var(--font-regular);
    font-weight: var(--weight-regular);
    color: var(--color-5);
    margin: 8px 0;
    }

    p {
    font-size: var(--font-regular);
    font-weight: var(--weight-regular);
    color: var(--color-5);
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
        
    }
`;

export default globalStyles;
