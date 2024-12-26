// src/components/seo/DynamicMeta.tsx
import React from "react";
import Head from "next/head";
import { MetaDataProps } from "@/interfaces/MetaDataProps";
import { DEFAULT_METADATA } from "@/config/defaultMetaData";

const DynamicMeta: React.FC<MetaDataProps> = ({
  title = DEFAULT_METADATA.title,
  description = DEFAULT_METADATA.description,
  url = DEFAULT_METADATA.url,
  image = DEFAULT_METADATA.image,
  siteName = DEFAULT_METADATA.siteName,
  type = DEFAULT_METADATA.type || "website",
  locale = DEFAULT_METADATA.locale || "en_US",
}) => (
  <Head>
    {/* Standard Meta Tags */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* Open Graph Meta Tags */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:image" content={image} />
    <meta property="og:locale" content={locale} />
    <meta property="og:type" content={type} />

    {/* Twitter Card Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {/* Robots */}
    <meta name="robots" content="index, follow" />
  </Head>
);

export default DynamicMeta;
