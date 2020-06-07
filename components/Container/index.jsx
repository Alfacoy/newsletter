//Import components
import CustomHead from "../CustomHead";
import TitlePage from "../TitlePage";
import Header from "../Header";
import Footer from "../Footer";
//Import Style
import style from "./style.module.scss";

const Container = ({ children, route }) => (
  <main>
    <CustomHead />
    <Header />
    <section className={style.container}>
      <TitlePage />
      {route ? <h3 className={style.titleSection}>{route}</h3> : <></>}
      <article className={style.grid}>{children}</article>
    </section>
    <Footer />
  </main>
);

export default Container;
