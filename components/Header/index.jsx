import Link from "next/link";
import Categories from "../Categories";
//Import Style
import style from "./style.module.scss";

const Header = () => (
  <>
    <header className={style.header}>
      <Link href="/">
        <h1>Noticias del mundo</h1>
      </Link>
    </header>
    <Categories />
  </>
);

export default Header;
