/** This hook gets specific image */ 
import { useStaticQuery, graphql } from "gatsby"
import "./fragments/fluid-image"
export const useImages = ( ) => {

 const data = useStaticQuery(  graphql` 
 query Images {
  images: allFile {
    nodes {
      id
      relativePath
      ...fixedImage
      ...fluidImage      
    }
  }
}
` )
  
 return data
}