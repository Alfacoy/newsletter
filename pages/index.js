//Import component
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardList from "../components/CardList";

//Import Next/React
import fetch from "isomorphic-unfetch";

const Home = ({ data }) => {
  return (
    <main>
      <Header />

      <section className="container">
        <article>
          <div className="box-title">
            <h3>Noticias en Argentina</h3>
          </div>
          <div className="grid-1">
            {data ? <CardList data={data.articles} /> : "Loading..."}
          </div>
        </article>
      </section>

      <Footer />

      {/* STYLE JSX */}
      <style jsx>{`
        .box-title {
          background-color: #a6b1e1;
          padding: 20px 0;
          margin-bottom: 5px;
        }

        .box-title > h3 {
          margin: 0;
          padding-left: 20px;
          text-transform: uppercase;
        }

        .grid-1 {
          display: grid;
          grid-template-columns: 1fr;
        }

        @media screen and (min-width: 720px) {
          .container {
            max-width: 700px;
            margin: 0 auto;
          }
          .grid-1 {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
        }

        @media screen and (min-width: 820px) {
          .container {
            max-width: 800px;
            margin: 0 auto;
          }
        }

        @media screen and (min-width: 1020px) {
          .container {
            max-width: 1000px;
            margin: 0 auto;
          }

          .grid-1 {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        @media screen and (min-width: 1220px) {
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
        }
      `}</style>
    </main>
  );
};

Home.getInitialProps = async ctx => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?category=health&country=ar&apiKey=6f444439c3c04c9aacb89e02143b3057`
  );
  const json = await res.json();
  return { data: json };
};

export default Home;
