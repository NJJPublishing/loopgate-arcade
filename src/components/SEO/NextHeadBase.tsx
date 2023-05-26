import Head from "next/head";

const NextHeadBase = () => {
  const baseUrl = "https://loopgate.netlify.app/";
  const ogImgUrl = `${baseUrl}/images/splash.png`;
  const title = "APES TOGETHER STRONG | A Mulligan Brothers Documentary";
  const description =
    "Securely and easily access exclusive digital content from the Mulligan Brothers using Loopring NFTs. Powered by LoopGate.";

  return (
    <Head>
      <title>APES TOGETHER STRONG | A Mulligan Brothers Documentary</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:image" content={ogImgUrl} />
      <meta property="og:site_name" content="APES TOGETHER STRONG" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImgUrl} />
      <link rel="shortcut icon" href="/images/favicon.png" />
    </Head>
  );
};

export default NextHeadBase;
