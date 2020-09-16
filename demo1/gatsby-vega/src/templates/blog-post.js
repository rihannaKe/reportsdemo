import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
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

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const { previous, next } = this.props.pathContext;

    return (
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div>{renderAst(post.htmlAst)}</div>
      </div>
    )
  }
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
