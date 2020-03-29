import style from "./style.scss";

const Footer = () => (
  <footer className={style.footer}>
    <p>
      Powered by{" "}
      <a href="https://newsapi.org/" target="_blank">
        NewsAPI.org
      </a>
    </p>
  </footer>
);

export default Footer;
