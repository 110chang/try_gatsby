import React from 'react'

export default ({data}) => (
  <div>
    <h1>My files</h1>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <div key={node.id}>
        <a href={node.frontmatter.path}>
          <h2>
            {node.frontmatter.title}
            <small>
              {node.frontmatter.date} {node.frontmatter.tags}
            </small>
          </h2>
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
            tags
          }
          excerpt
          timeToRead
          html
        }
      }
    }
  }
`
