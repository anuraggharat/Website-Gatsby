import React from "react"
import { graphql} from 'gatsby'
import { Link } from "gatsby"
import HeroSection from "../components/reuseable/HeroSection"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Learn to write code"
      subtitle="Hello"
      heroclass="bgimage"
/>
  </Layout>
)
export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.jpg" }) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default IndexPage
