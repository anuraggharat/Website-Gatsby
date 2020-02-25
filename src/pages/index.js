import React from "react"
import { graphql} from 'gatsby'
import HeroSection from "../components/reuseable/HeroSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Infoblock from "../components/reuseable/InfoBlock"
import CoursesCart from "../components/Cart/coursescart"
import Whyus from '../components/reuseable/Whyus'
import Certification from "../components/reuseable/Certification"
import Techtalks from "../components/reuseable/TechTalks"
import Frameworks from "../components/reuseable/Frameworks"
import img from "../images/coding.png"
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Hey There Geek!"
      subtitle="Ready to kickstart your coding journey?"
      heroclass="bgimage"
    /> 
        <Infoblock 
        heading="Get career ready with courses specially designed with Industry approach."
        details="At LearnToCode.com , we try to bring latest courses to students so that they can stand out in crowd. Not only that we provide a dedicated team to answer your questions."
        img={img}
    />
    <Whyus /> 
    <Frameworks />
    <Certification />
    <Techtalks />
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
