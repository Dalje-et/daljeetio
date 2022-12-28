import React from "react";
import Layout from "@/components/Layout/Layout";
import MDXCompProvider from "@/components/Layout/MDX/MDXProvider";

export default function DefaultPageTemplate({ children }) {
  return (
    <MDXCompProvider>
      <Layout>
        <div className="lg:prose-xl">{children}</div>
      </Layout>
    </MDXCompProvider>
  );
}
