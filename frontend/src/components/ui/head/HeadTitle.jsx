import React from "react";
import { Helmet } from "react-helmet";

const HeadTitle = ({
  pageTitle,
  seo_description,
  seo_keywords, // array of strings
}) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>{`Credence Tec - ${pageTitle}`}</title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="Credence Tec" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content={seo_description} data-react-helmet="true"/>
      <meta itemprop="description" content={seo_description} />
      <meta property="og:description" content={seo_description} />
      <meta name="twitter:description" content={seo_description} />
      {/* keywords seo */}
      <meta name="keywords" content={seo_keywords} />
    </Helmet>
  );
};

export default HeadTitle;
