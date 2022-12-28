import { graphql } from "gatsby";
import React from "react";

import ListNote from "@/components/ListNote";
import Layout from "@/components/Layout";

import { HERO_TITLE, HERO_SUBTITLE } from "../../config";

const title = "daljeet.io | Blog 📖";
const description = "description";
const keywords = "comma separated keywords";

const BlogPage = ({ data, pageContext }) => {
  const { edges } = data.allMdx;
  console.log(pageContext);

  return (
    <Layout title={title} description={description} keywords={keywords}>
      <div className="mt-10">
        <h1 className="text-3xl mt-4 md:text-5xl leading:snug md:leading-normal">
          {HERO_TITLE}
        </h1>
      </div>
      <h2 className="text-xl text-slate-600 mb-6 mt-0 md:text-3xl">
        {HERO_SUBTITLE}
      </h2>
      <div className="relative grid grid-cols-12 gap-6">
        <ListNote edges={edges} />
      </div>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query IndexTemplateQuery {
    allMdx(
      filter: {
        frontmatter: { publish: { ne: false } }
        fileAbsolutePath: { regex: "/vault/" }
      }
      limit: 10
      sort: { order: DESC, fields: fields___date }
    ) {
      edges {
        node {
          ...postList
        }
      }
    }
  }
`;
