import { graphql } from "gatsby";

export const postFragment = graphql`
  fragment post on Mdx {
    id
    excerpt(pruneLength: 300)
    fields {
      date
      location
      title
      slug
      tagSlugs
      category
      categorySlug
      stage
    }
    frontmatter {
      date
      location
      tags
      title
      socialImage {
        publicURL
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
    headings {
      depth
      value
    }
    tableOfContents
  }

  fragment postList on Mdx {
    fields {
      date
      location
      title
      slug
      category
      categorySlug
      tagSlugs
      stage
    }
    excerpt(pruneLength: 300)
    frontmatter {
      title
      date
      location
      category
      tags
      featured
      socialImage {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

export default postFragment;
