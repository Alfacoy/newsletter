const Layout = props => (
  <main>
    <h1>Resumen de noticias</h1>

    {props.Children}

    <style jsx>{``}</style>
  </main>
);

export default Layout;
