import React from "react";
import { graphql } from "gatsby";

import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Card from "@/components/Card";

import {
  HERO_TITLE,
  HERO_SUBTITLE
} from "../../config";

const IndexPage = ({ data, pageContext }) => {
  const { edges } = data.allMdx;

  return (
    <Layout>
      <div className="mt-10">
        <h1 className="text-body text-3xl mt-4 md:text-5xl leading-normal md:leading-snug transition-all ease-in-out">
          {HERO_TITLE}
        </h1>
      </div>
      <h2 className="text-3xl text-slate-600 mb-6 mt-0">{HERO_SUBTITLE}</h2>
      <Button to="/blog/" label="See Posts →" />
      
      <div className="mt-16">
        <div className="grid grid-cols-twoColumn gap-8 py-2 px-2">
          <Card url="/blog/">
            <div className="flex flex-col py-3 px-4">
              <span className="font-mono text-emerald-700">NEW</span>
              <span className="font-bold text-lg">📖 Blog →</span>
            </div>
          </Card>
          <Card url="/about/">
            <div className="flex flex-col py-3 px-4">
              <span className="font-mono text-emerald-700">NEW</span>
              <span className="font-bold text-lg">👨🏽‍💻 About Me →</span>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

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
