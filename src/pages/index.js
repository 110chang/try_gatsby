import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      <li>
        <Link to="/page-2/">Go to page 2</Link>
      </li>
      <li>
        <Link to="/files/">Go to files</Link>
      </li>
      <li>
        <Link to="/tags/">Go to tags</Link>
      </li>
    </ul>
  </div>
)

export default IndexPage
