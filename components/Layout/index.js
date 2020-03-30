//Import components
import Header from "../Header";
import Footer from "../Footer";

const Layout = props => (
  <main>
    <Header />
    {props.children}
    <Footer />
  </main>
);

export default Layout;
