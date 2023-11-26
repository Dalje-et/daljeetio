import { MDXRenderer } from "gatsby-plugin-mdx";
import kebabCase from "lodash.kebabcase";
import { graphql } from "gatsby";
import React from "react";

import MdxProvider from "@/components/Layout/MDX/MDXProvider";
import BlogBackLink from "@/components/Article/BlogBackLink"
import Link from "@/components/GatsbyLink";
import Layout from "@/components/Layout/Layout";

const PostTemplate = ({ data }) => {
  const postNode = data.mdx;
  const post = data.mdx.fields;
  const postTitle = data.mdx.frontmatter.title;
  // const pageTitle = `${postTitle} - ${siteTitle}`;

  return (
    <MdxProvider>
      <Layout>
        { /* <SEO postNode={data.mdx} postSEO postPath={data.mdx.fields.slug} /> */ }
        <BlogBackLink />
        <h1>{postTitle}</h1>
        <p className="mt-2 text-sm tracking-tight font-sans">
          🗓 {post.date} | 📍 {post.location}
        </p>
        { /* <ul className="my-6 flex flex-row gap-4 mb-4">
          {tags &&
            tags.map((tag) => (
              <li key={tag} className="px-2 py-1 bg-slate-100 rounded-full">
                <Link to={`/tag/${kebabCase(tag)}`}>{tag}</Link>
              </li>
            ))}
        </ul> */ }
        <article className="my-6">
          <MDXRenderer>{postNode.body}</MDXRenderer>
        </article>
      </Layout>
    </MdxProvider>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      ...post
    }
  }
`;

export default PostTemplate;
