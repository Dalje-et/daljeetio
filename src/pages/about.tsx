import React from "react";
import { graphql } from "gatsby";

import ListNote from "@/components/ListNote";
import Layout from "@/components/Layout";

import { HERO_TITLE, HERO_SUBTITLE } from "../../config";

const AboutPage = ({ data, pageContext }) => {
  const { edges } = data.allMdx;

  return (
    <Layout>
      <div className="my-10">
        <h1 className="text-black text-3xl mt-4 md:text-5xl leading-normal md:leading-snug transition-all ease-in-out">
          {HERO_TITLE}
        </h1>
      </div>
      <h2 className="text-3xl text-slate-600 my-6">{HERO_SUBTITLE}</h2>
      <div className="relative grid grid-cols-12 gap-6">
        <ListNote edges={edges} />
      </div>
    </Layout>
  );
};

export default AboutPage;

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
