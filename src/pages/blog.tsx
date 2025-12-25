import { graphql } from "gatsby";
import React from "react";

import ListNote from "@/components/Article/ListNote";
import Layout from "@/components/Layout/Layout";

import { HERO_TITLE, HERO_SUBTITLE } from "../../config";

const title = "daljeet.io | Blog 📖";
const description = "description";
const keywords = "comma separated keywords";

const BlogPage = ({ data }) => {
  const { edges } = data.allMdx;
  
  return (
    <Layout title={title} description={description} keywords={keywords}>
      <div className="mt-10">
        <h1 className="text-3xl mt-4 md:text-5xl leading:snug md:leading-normal">
          Posts
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
        internal: { contentFilePath: { regex: "/vault/" } }
      }
      limit: 10
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          ...postList
        }
      }
    }
  }
`;
