import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Hero />
    <Footer />
  </Layout>
)

export default IndexPage
