import React from "react"
import { graphql} from 'gatsby'
import { Link } from "gatsby"
import HeroSection from "../components/reuseable/HeroSection"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import InfoBlock from "../components/reuseable/InfoBlock"
import Aboutpeople from "../components/About/aboutpeople"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="About Us"
      subtitle=""
      heroclass="abouthero"
    />
    <InfoBlock 
    heading="aboutus"/>
    <Aboutpeople />
  </Layout>
)
export const query = graphql`
{
  img: file(relativePath: { eq: "abouthero.jpg" }) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default IndexPage
