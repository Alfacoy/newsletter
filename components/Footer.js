const Footer = () => (
  <footer>
    <p>
      Powered by{" "}
      <a href="https://newsapi.org/" target="_blank">
        NewsAPI.org
      </a>
    </p>

    <style jsx>{`
      footer {
        padding: 50px 0;
        margin-top: 50px;
        text-align: center;
        background-color: #424874;
        color: white;
        font-weight: bold;
      }

      footer p > a {
        color: #a6b1e1;
        text-decoration: none;
      }
    `}</style>
  </footer>
);

export default Footer;
