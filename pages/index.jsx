//Import component
import Container from "../components/Container";
import TitlePage from "../components/TitlePage";
import CardList from "../components/CardList";

const Home = ({ data }) => {
  return (
    <Container>
      <section className="container">
        <article>
          <TitlePage />
          <div className="grid">
            {data ? <CardList data={data.articles} /> : "Loading..."}
          </div>
        </article>
      </section>
    </Container>
  );
};

Home.getInitialProps = async (ctx) => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?category=health&country=ar&apiKey=6f444439c3c04c9aacb89e02143b3057`
  );
  const json = await res.json();
  return { data: json };
};

export default Home;
