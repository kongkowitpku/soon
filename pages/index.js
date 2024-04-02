import Head from "next/head";
import TopBar from "../src/components/TopBar";
import HeadLine from "../src/components/Headline";
import Footer from "../src/components/Footer";
import RoundArt from "../src/components/RoundArt";
import GridArt from "../src/components/GridArt";
import ClipArt from "../src/components/ClipArt";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kongkow IT Pekanbaru</title>
        <link
          rel="preload"
          href="/fonts/Konnect-Regular.otf"
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/Konnect-Medium.otf"
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/Konnect-Bold.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#474443" />
        <meta name="msapplication-TileColor" content="#474443" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Kongkow IT Pekanbaru" />
        <meta
          name="description"
          content="A nonprofit network of local makers & professionals."
        />
        <meta
          name="keywords"
          content="Kongkow IT Pekanbaru, IT Enthusiast, Community, Pekanbaru"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days"></meta>
        <title>Kongkow IT Pekanbaru</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kongkowitpku.xyz" />
        <meta property="og:title" content="Kongkow IT Pekanbaru" />
        <meta
          property="og:description"
          content="A nonprofit network of local makers & professionals."
        />
        <meta property="og:image" content="https://kongkowitpku.xyz/og.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kongkowitpku.xyz" />
        <meta property="twitter:title" content="Kongkow IT Pekanbaru" />
        <meta
          property="twitter:description"
          content="A nonprofit network of local makers & professionals."
        />
        <meta
          property="twitter:image"
          content="https://kongkowitpku.xyz/og.png"
        />
      </Head>
      <TopBar />
      <HeadLine />
      <Footer />
      <RoundArt />
      <GridArt />
      <ClipArt />
    </>
  );
}
