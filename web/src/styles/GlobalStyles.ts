import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
    color: var(--text-color);
  }

  body, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6{
    color: var(---title-color);
    font-family: Ubuntu;
  }

  :root {
    --primary-color: #34cb79;
    --title-color: #322153;
    --text-color: #6c6c80;
  }
`;
