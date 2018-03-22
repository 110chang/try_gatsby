import React from 'react'

export default ({data}) => (
  <div>
    <h1>My files</h1>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <div key={node.id}>
        <a href={node.frontmatter.path}>
          {node.frontmatter.title}
        </a>
      </div>
    ))}
  </div>
)

export const query = graphql`
  query FilesQuery {
  	allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            path
          }
          excerpt
          timeToRead
          html
        }
      }
    }
  }
`
