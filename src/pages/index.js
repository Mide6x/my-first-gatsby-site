import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    <h1>This is my first Gatsby Website guys, I am so hyped lol</h1>
    <p>I am actually getting a hang of it and I am so proud of myself</p>
    <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="src\images\tress.jpg"
      />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
