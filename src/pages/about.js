import React from "react"
import { graphql} from 'gatsby'
import HeroSection from "../components/reuseable/HeroSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoBlock from "../components/reuseable/InfoBlock"
import Aboutpeople from "../components/About/aboutpeople"
import img from "../images/team.png"
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="ABOUT US"
      subtitle=""
      heroclass="abouthero"
    />
    <InfoBlock
    heading="Learn Code Online"
    details="LearnCodeOnline is a platform to learn programming with high quality videos at affordable price.It is a platform to enhance your coding skills and be up-to-date with latest technologies and skills.LTO as we call it, was 
    started in 2015 by two of our founders Hitesh Chaudhary and Anurag Gharat.From being a Youtube Tutorails Channel to a Online learning based startup we have come a long way. Now we suppy Certification Courses as well as arrange Tech-Talks." 
    img={img}
/>
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
