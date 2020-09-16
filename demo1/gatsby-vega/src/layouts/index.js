import React from 'react'
import Link from 'gatsby-link'

class Template extends React.Component {
  render() {
    const { location, children } = this.props;

    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <h1>Example of using gatsby-remark-vega</h1>
        {children()}
      </div>
    );
  }
}

export default Template;
