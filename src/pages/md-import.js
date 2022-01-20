import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {console} from 'window-or-global';

const BlogPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: {eq: "docs-repo"}
          relativePath: {eq: "content/tutorials/wallets.md"}
        }
      ) {
        edges {
          node {
            extension
            dir
            modifiedTime
            relativePath
            base
            name
          }
        }
      }
    }
  `);

  console.log('Data: ', data);
  console.log('Data NAME: ', data.allFile.edges[0].node.name);
  return (
    <div>
      <p>My blog post contents will go here (eventually).</p>
      Name: {data.allFile.edges[0].node.name}
    </div>
  );
};

export default BlogPost;
