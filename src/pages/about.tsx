import React from "react";

import Layout from "@/components/Layout/Layout";
import Button from "@/components/Button";

const title = "daljeet.io | About Me 👨🏽‍💻";
const description = "Site Description";
const keywords = "comma separated keywords";

const AboutPage = () => {
  return (
    <Layout title={title} description={description} keywords={keywords}>
      <div className="mt-10">
        <h1 className="text-3xl mt-4 md:text-5xl leading:snug md:leading-normal">
          About Me 👨🏽‍💻
        </h1>
      </div>
      <h2 className="text-xl text-slate-600 mb-6 mt-0 md:text-3xl">
        Thanks for visting my page!
      </h2>
      <Button to="/blog/" label="See Posts →" />

      <h2 className="text-xl mt-20 md:text-3xl">👋🏽</h2>
      <p>
        Hey there! I'm Daljeet - the author of this blog. What you'll find here
        are explorations and celebrations of ideas, concepts, developments, and
        randomness related to tech and life.
      </p>

      <p>
        Currently, I work as a Product Manager for a company called{" "}
        <a href="https://datadoghq.com" target="_blank">Datadog</a>{" "}
        but every now and then, I like to go back to being a Software Engineer.
        You'll see a healthy mix of <strong>product management</strong>,{" "}
        <strong>software engineering</strong>, and{" "}
        <strong>general life </strong>
        related articles on this page.
      </p>

      <h2 className="text-xl mt-20 md:text-3xl">More Stuff</h2>
      <p>
        <ol className="list-decimal space-y-2 list-inside">
          <li>
            This page is{" "}
            <a href="https://www.github.com/Dalje-et/daljeetio" target="_blank">open source</a>
            .
          </li>
          <li>
            You can reach out to me on Twitter via{" "}
            <a href="https://www.twitter.com/daljeetsan" target="_blank">@daljeetsan</a>.
          </li>
        </ol>
      </p>
    </Layout>
  );
};

export default AboutPage;
