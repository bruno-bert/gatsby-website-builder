import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle` 

@import url("${props => props.theme.typography.fontUrl}");

html {
 font-family: ${props => props.theme.typography.fontFamily};
}

   
`

export default GlobalStyle
