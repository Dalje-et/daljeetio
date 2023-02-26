import React, { ReactNode } from "react";
import Header from "@/components/Layout/Header";
import Container from "@/components/Layout/Container";
import Footer from "@/components/Layout/Footer";
import {
  LOCALE,
  COPYRIGHT,
  AUTHOR,
  KEYWORDS,
  SITE_DESCRIPTION,
  SITE_TITLE,
} from "../../../config";
import { Helmet } from "react-helmet";

const Layout: React.FC = ({
  children,
  title,
  description,
  keywords,
  url,
  full,
  ...props
}: Props) => {
  const pageTitle = title || SITE_TITLE;
  const pageDescription = description || SITE_DESCRIPTION;
  const pageKeywords = keywords || KEYWORDS;
  return (
    <div>
      <Helmet htmlAttributes={{ lang: LOCALE }} title={pageTitle}>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="publisher" content={AUTHOR.NAME} />
        <meta name="author" content={AUTHOR.NAME} />
        <meta name="copyright" content={COPYRIGHT} />
        <script async defer src="https://analytics.umami.is/script.js" data-website-id="5160df2c-1bad-4749-ad3e-37a12dab6ffe"></script>
      </Helmet>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;

type Props = {
  children: ReactNode;
  title: string;
  description?: string;
  socialImage?: string;
  url?: string;
  keywords: string;
  full: boolean;
};
