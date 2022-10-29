import * as React from "react";
import { Link } from "gatsby";
import Layout from "@/components/Layout";

// markup
const NotFoundPage = () => {
  return (
    <main>
      <Layout>
        <title>Not found</title>
        <h1>Page not found</h1>
        <p className="py-2">
          The page you are looking for doesn't exist.
        </p>
        <p className="py-2">
          <Link to="/">Go home</Link>.
        </p>
      </Layout>
    </main>
  );
};

export default NotFoundPage;
