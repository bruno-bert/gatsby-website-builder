import React from "react"
import Img from "gatsby-image"
import { useImages } from "../hooks/use-images"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */


const Image = ({ src }) => {
  const data = useImages()
  const [ img ] = data.images.nodes.filter( (img) => img.relativePath === src ) 
  return <Img fixed={img.childImageSharp.fixed} />
}

export default Image
