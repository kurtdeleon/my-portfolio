import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import { headData } from "../data/data";
import "../styles/main.scss";

const Layout = ({ children }) => {
  const { title, lang, charset, meta } = headData;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta charSet={charset} />
        <html lang={lang} />
        <meta name="description" content={meta.description} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content={meta.viewport} />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
