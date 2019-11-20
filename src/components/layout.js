import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import * as styles from "../styles"
import GlobalStyle from "../styles/GlobalStyle"
import StyleBuilder from "../helpers/StyleBuilder"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          theme
        }
      }
    }
  `)

  const theme = StyleBuilder(styles, data.site.siteMetadata)

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main>{children}</main>
      </ThemeProvider>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
