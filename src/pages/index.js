import React from "react"
import { graphql} from 'gatsby'
import HeroSection from "../components/reuseable/HeroSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Infoblock from "../components/reuseable/InfoBlock"
import CoursesCart from "../components/Cart/coursescart"
import Whyus from '../components/reuseable/Whyus'
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Learn to write code"
      subtitle="Hello"
      heroclass="bgimage"
    /> 
    <Infoblock />
    <Whyus /> 
    <CoursesCart 
    courses={data.courses}
    />
  </Layout>

)
export const query = graphql`
{
  img: file(relativePath: { eq: "heroindex.jpg" }) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  courses:allContentfulCourses{
    edges{
      node{
        id
        title
        category
        price
        description {
          id
          description
        }
        image{
          fixed(width:400,height:200){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`
export default IndexPage
