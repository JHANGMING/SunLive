import Head from 'next/head';
import { CustomHeadProps, dataSet, defaultMeta } from './data';

export default function CustomHead({ pageCategory }: CustomHeadProps) {
  if (!dataSet[pageCategory]) return null;
  const { defaultTitle, defaultDescription, defaultImage } = defaultMeta;
  const pageTitle = dataSet[pageCategory].title;
  const pageDescription = dataSet[pageCategory].desc;
  const pageImage = dataSet[pageCategory].image;
  const pageCanonicalUrl = dataSet[pageCategory].url;

  return (
    <>
      <Head>
        <title>
          {pageTitle ? `${pageTitle} - ${defaultTitle}` : defaultTitle}
        </title>
        <meta
          name="description"
          content={pageDescription || defaultDescription}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
        {/* Line */}
        <meta property="line:app_id" content="LINE_APP_ID" />
        <meta property="line:multi_share" content="true" />
        <meta property="og:image" content={pageImage || defaultImage} />
        {/* Discord */}
        <meta property="discord:invite_image" content={defaultImage} />
        <meta property="discord:invite_image:width" content="1200" />
        <meta property="discord:invite_image:height" content="600" />
        {/* Facebook */}
        <meta property="og:site_name" content="搶先購" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={pageCanonicalUrl || 'https://vercel.app/'}
        />
        <meta property="og:title" content={pageTitle || defaultTitle} />
        <meta
          property="og:description"
          content={pageDescription || defaultDescription}
        />
        <meta property="og:image" content={pageImage || defaultImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:locale" content="zh_TW" />
        {/* Google */}
        <link
          rel="canonical"
          href={pageCanonicalUrl || 'https://vercel.app/'}
        />
      </Head>
      <h1 className="hidden">
        {pageTitle ? `${pageTitle} - ${defaultTitle}` : defaultTitle}
      </h1>
    </>
  );
}
