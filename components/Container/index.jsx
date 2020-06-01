//Import components
import CustomHead from "../CustomHead";
import Header from "../Header";
import Footer from "../Footer";
//Import Style
import style from "./style.module.scss";

const Layout = ({ children }) => (
  <main>
    <CustomHead />
    <Header />
    {children}
    <Footer />
  </main>
);

export default Layout;
