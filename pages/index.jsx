//Import component
import Container from "../components/Container";
import CardList from "../components/CardList";

const Home = ({ data }) => {
  console.log(data);
  return (
    <Container number={data.totalResults}>
      {data ? <CardList data={data.articles} /> : "Loading..."}
    </Container>
  );
};

Home.getInitialProps = async () => {
  const API_KEY = process.env.API_KEY;
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?pageSize=100&category=health&country=ar&apiKey=${API_KEY}`
  );
  const json = await res.json();
  return { data: json };
};

export default Home;
