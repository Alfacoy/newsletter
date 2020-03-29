import Head from "next/head";

const Header = () => (
  <header>
    <Head>
      <title>Noticias</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <h1>Noticias del mundo</h1>

    <style jsx>{`
      header {
        padding: 50px 0;
        margin-bottom: 50px;
        text-align: center;
        background-color: #424874;
        color: white;
        font-weight: bold;
        text-transform: uppercase;
      }
    `}</style>
  </header>
);

export default Header;
