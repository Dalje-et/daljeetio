import React from "react";
import { graphql } from "gatsby";

import Layout from "@/components/Layout/Layout";
import Button from "@/components/Button";
import Card from "@/components/Card";

import {
  HERO_TITLE,
  HERO_SUBTITLE
} from "../../config";

const title = "daljeet.io | Home";
const description = "description";
const keywords = "comma separated keywords";

const IndexPage = () => {
  
  return (
    <Layout title={title} description={description} keywords={keywords}>
      <div className="mt-10">
        <h1 className="text-3xl mt-4 md:text-5xl leading:snug md:leading-normal">
          {HERO_TITLE}
        </h1>
      </div>
      <h2 className="text-xl text-slate-600 mb-6 mt-0 md:text-3xl">{HERO_SUBTITLE}</h2>
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
