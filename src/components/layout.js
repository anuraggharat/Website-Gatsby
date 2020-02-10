/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./reuseable/Navbar"
import Footer from "./reuseable/Footer"
import Header from "./header"
import "./bootstrap.min.css"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min.js";

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />

  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
