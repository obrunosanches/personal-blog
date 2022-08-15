import Head from "next/head";
import { useRouter } from "next/router";

import siteMetadata from "@/data/siteMetadata";

interface ICommonSEOProps {
  title?: string;
  description?: string;
  ogType: string;
  canonicalUrl?: string;
}

const CommonSEO = ({
  title = siteMetadata.title,
  description = siteMetadata.description,
  ogType,
  canonicalUrl,
}: ICommonSEOProps) => {
  const router = useRouter();
  const canonical = canonicalUrl ?? `${siteMetadata.siteUrl}${router.asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <link rel="canonical" href={canonical} />
    </Head>
  );
};

export const PageSEO = () => {
  return <CommonSEO ogType="website" />;
};
