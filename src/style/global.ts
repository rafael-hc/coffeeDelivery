import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
    }
    html{
        font-size: 100%;
    }
    a{
        text-decoration: none;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']}
    }

    body{
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    button{
        background: none;
        border: 0;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;    
    }

    h1, h2, h3{
        font-family: 'Baloo 2', cursive;
        line-height: 130%;
    }

    h1 {
        font-size: 3rem;
        color: ${(props) => props.theme['base-title']};
    }

    h2 {
        font-size: 2rem;
        color: ${(props) => props.theme['base-subtitle']};
    }

    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
    }

    @media screen and (max-width: 760px) {

        html {
            font-size: 87.5%;
        }

    }

`
