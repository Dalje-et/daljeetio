import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";

import ArticleProgressBar from "@/components/Fun/ArticleProgressBar";
import Container from "@/components/Layout/Container";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

import {
  LOCALE,
  COPYRIGHT,
  AUTHOR,
  KEYWORDS,
  SITE_DESCRIPTION, 
  SITE_TITLE,
} from "../../../config";

const PostLayout: React.FC = ({ children, title, description, keywords, url }: Props) => {
  const pageTitle = title || SITE_TITLE;
  const pageDescription = description || SITE_DESCRIPTION;
  const pageKeywords = keywords || KEYWORDS;

  return (
    <>
      <Helmet htmlAttributes={{ lang: LOCALE }} title={pageTitle}>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="publisher" content={AUTHOR.NAME} />
        <meta name="author" content={AUTHOR.NAME} />
        <meta name="copyright" content={COPYRIGHT} />
      </Helmet>
      <Header />
      <Container>
        <div className="grid grid-cols-10">
          <div className="w-100 sticky top-20 self-start">
            <ArticleProgressBar />
          </div>
          <div className="col-span-9">{children}</div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default PostLayout;

type Props = {
  children: ReactNode;
  title: string;
  description?: string;
  socialImage?: string;
  url?: string;
  keywords: string;
};
