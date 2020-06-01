//Import Components
import Categories from "../Categories";
//Import Style
import style from "./style.module.scss";

const Header = () => (
  <header className={style.header}>
    <h1>Noticias del mundo</h1>
    <Categories />
  </header>
);

export default Header;
