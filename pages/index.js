//Import component
import Layout from "../components/Layout";
import TitlePage from "../components/TitlePage";
import CardList from "../components/CardList";

//Import Styles
import style from "../styles/styles.scss";

//Import Next/React
import fetch from "isomorphic-unfetch";

const Home = ({ data }) => {
  return (
    <Layout>
      <section className={style.container}>
        <article>
          <TitlePage />
          <div className={style.grid}>
            {data ? <CardList data={data.articles} /> : "Loading..."}
          </div>
        </article>
      </section>
    </Layout>
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
