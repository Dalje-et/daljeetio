import React from "react";
import { graphql } from "gatsby";


import About from "@/components/Index/About";
// import ListNote from "@/components/ListNote";
import Link from "@/components/GatsbyLink";
import Layout from "@/components/Layout";
import Button from "@/components/Button";

import {
  HERO_TITLE,
  HERO_SUBTITLE,
  SITE_TITLE,
  SITE_DESCRIPTION,
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
      
      <About />
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
