module.exports = {
  siteMetadata: {
    title: `Gatsby Website Builder`,
    description: `This starter helps to create websites from content on Content Management Systems.`,
    author: `Bruno Bertoni de Paula`,
    
    /** temporary properties until the cms is implemented
     * in future, this will be pulled from cms 
     */
    theme: `light`,

    links: [
      { id: 'home',  'description': 'Home', href: '#home'},
      { id: 'missao', 'description': 'Missão', href: '#missao'},
      { id: 'sobre', 'description': 'Sobre', href: '#sobre'},
      { id: 'problema', 'description': 'Problema', href: '#problema'},
      { id: 'aplicacao', 'description': 'Aplicação do Cliente', href: '#aplicacao'},
      { id: 'recursos', 'description': 'Recursos', href: '#recursos'},
      { id: 'roadmap', 'description': 'Roadmap', href: '#roadmap'},
    ]

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 100,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
