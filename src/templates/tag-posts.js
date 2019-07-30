import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout/layout';

import TagPostsLayout from '../components/layout/TagPostsLayout';
import PageLayout from '../components/layout/PageLayout';

const tagPosts = ({data, pageContext}) => {

  const {tag} = pageContext;
  const { totalCount } = data.allMarkdownRemark
  const pageHeader = `${totalCount} post${totalCount === 1 ?  '' : 's'} tagged with "${tag}"`

  return (
    <Layout >
      <PageLayout title={pageHeader}>
        <TagPostsLayout data={data} pageContext={pageContext}/>
      </PageLayout> 
    </Layout>
  );
}

export const tagQuery = graphql`
    query($tag: String!){
      site {
        siteMetadata {
          gridSpacing
        }
      }
      allMarkdownRemark (
        sort: {fields: [frontmatter___date], order: DESC}
        filter: { frontmatter: {tags: { in: [$tag]} } }
      ) {
          totalCount
          edges {
            node {
              id 
              frontmatter {
                title
                date(formatString: "MMM Do YYYY")
                tags
                slug
                image {
                  childImageSharp {
                    fixed(width: 350) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
              excerpt
            }
          }
      }
      
    }

`

export default tagPosts;