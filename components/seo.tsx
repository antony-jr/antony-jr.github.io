import React from "react";
import { NextSeo, NextSeoProps } from "next-seo";

export interface SEOProps extends Pick<NextSeoProps, "title" | "description"> {}

const SEO = ({ title, description }: SEOProps) => (
  <NextSeo
    title={title}
    description={description}
    openGraph={{ title, description }}
    titleTemplate={"%s - antonyjr.in"}
  />
);

export default SEO;
