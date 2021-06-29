import { createGlobalStyle } from 'styled-components';

const Resetcss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }
`;

export default Resetcss;