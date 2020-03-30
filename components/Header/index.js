//Import Components
import Head from "next/head";
import Categories from "../Categories";

//Import Style
import style from "./style.scss";

const Header = () => (
  <header className={style.header}>
    <Head>
      <title>Noticias</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <h1>Noticias del mundo</h1>

    <Categories />
  </header>
);

export default Header;
