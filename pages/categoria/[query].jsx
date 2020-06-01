//Import React/Next
import { useRouter } from "next/router";
//Import Components
import Container from "../../components/Container";
import TitlePage from "../../components/TitlePage";
import CardList from "../../components/CardList";

const ThePathIs = (routhe) => {
  let ruth = "";
  switch (routhe) {
    case "economia":
      return (ruth = "business");
      break;
    case "entretenimiento":
      return (ruth = "entertainment");
      break;
    case "salud":
      return (ruth = "health");
      break;
    case "ciencia":
      return (ruth = "science");
      break;
    case "deportes":
      return (ruth = "sports");
      break;
    case "tecnologia":
      return (ruth = "technology");
      break;
    default:
      return (ruth = "general");
      break;
  }
};

const Category = ({ data }) => {
  const router = useRouter();
  const datos = data;

  return (
    <Container>
      <section className="container">
        <h1>{router.query.query.toUpperCase()}</h1>
        <TitlePage />

        <article className="grid">
          <CardList data={data.articles} />
        </article>
      </section>
    </Container>
  );
};

Category.getInitialProps = async (ctx) => {
  const { query } = ctx.query;
  const cat = ThePathIs(query);
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?category=${cat}&country=ar&apiKey=6f444439c3c04c9aacb89e02143b3057`
  );
  const json = await res.json();

  return { data: json };
};

export default Category;
