import Card from "../Card";

const CardList = (data) => {
  const lista = data.data
    .filter((i) => i.urlToImage !== null)
    .map((i, index) => (
      <Card key={index} title={i.title} image={i.urlToImage} url={i.url} />
    ));
  return <>{lista}</>;
};

export default CardList;
