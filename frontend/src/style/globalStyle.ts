import {ThemeUnwrapped} from "./theme";

const globalStyle: (theme: ThemeUnwrapped) => string = theme => `
    body {
        background-color: ${theme.backgroundColor};
        margin: 0;
        padding: 0;
    }
    * {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; 
    }       
`;

export default globalStyle
