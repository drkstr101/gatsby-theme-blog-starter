import React from 'react';
import Layout from '../components/layout/layout';
import { graphql } from 'gatsby';
import SEO from '../components/seo/Seo';

import SinglePostLayout from '../components/layout/SinglePostLayout';

/**
 * Template used by Blog Posts files under posts folder
 */

const singlepost = ({data, pageContext}) => {

  const{title, description, tags, slug, image, date, update_date} = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO 
        title={title}
        description={description}
        tags={tags.join(",")}
        image={image.childImageSharp.fluid}
        isBlogPost={true}
        slug={slug}
        date={date}
        update_date={update_date} />
      <SinglePostLayout data={data} />
    </Layout>
  );
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: {eq: $slug}}) {
      id
      html
      frontmatter{
        title
        description
        pagetitle
        summary
        date(formatString: "MMM D, YYYY")
        update_date(formatString: "MMM D, YYYY")
        tags
        slug
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default singlepost;