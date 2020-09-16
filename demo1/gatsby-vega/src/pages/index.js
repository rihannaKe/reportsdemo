import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import rehypeReact from 'rehype-react';
import Vega, {
  KEY,
} from 'gatsby-remark-vega/dist/client';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    [KEY]: Vega,
  }
}).Compiler;

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <div>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3><Link to={node.fields.slug}>{title}</Link></h3>
              <div>{renderAst(node.htmlAst)}</div>
            </div>
          )
        })}
      </div>
    )
  }
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          htmlAst
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
