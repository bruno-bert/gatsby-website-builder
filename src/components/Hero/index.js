import React from "react"
import { HeroWrapper } from "./styles"


export default function Hero( props ) {

  const heroId = 'hero'
  const [ meta ] = props.metadata.site.siteMetadata.sections.filter( (section) => section.type === heroId  )

  return (
    <HeroWrapper>
      <h1>{ meta.hero.title }</h1>
      <p>{ meta.hero.subTitle }</p>
    </HeroWrapper>
  )
}
