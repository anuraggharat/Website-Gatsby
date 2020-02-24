import React from "react"
import { graphql} from 'gatsby'
import HeroSection from "../components/reuseable/HeroSection"
import Layout from "../components/layout"
import ContactForm from "../components/Contact/ContactForm"
const Contact = ({data}) => (
  <Layout>
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Contact Us"
      subtitle=""
      heroclass="bgimage-contact"
    />
    <ContactForm /> 
  </Layout>

)
export const query = graphql`
{
  img: file(relativePath: { eq: "contact.png" }) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  
}
`
export default Contact
