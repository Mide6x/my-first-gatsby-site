import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    <h1>This is my first Gatsby Website guys, I am so hyped lol</h1>
    <p>I am actually getting a hang of it and I am so proud of myself</p>
    <StaticImage src="../images/tress.jpg"
        alt="a tree"/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title= "HomePage"/>
