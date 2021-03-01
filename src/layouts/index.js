import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import { headData } from "../data/data";
import "normalize.css";
import "../styles/main.scss";

const Layout = ({ children }) => {
  const { title, lang, meta } = headData;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <html lang={lang} />

        {/* <!-- Primary Meta Tags --> */}
        <meta charSet={meta.charset} />
        <meta name="title" content={title} />
        <meta name="description" content={meta.description} />
        <meta name="viewport" content={meta.viewport} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content="meta-image.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={meta.url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content="meta-image.jpg" />
      </Helmet>
      <Header />
      <div id="content-wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
