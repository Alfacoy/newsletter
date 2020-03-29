import Card from "../Card";

const CardList = data => {
  const lista = data.data.map((i, index) => (
    <Card
      key={index}
      title={i.title}
      description={i.description}
      image={i.urlToImage}
      url={i.url}
    />
  ));

  return <>{lista}</>;
};

export default CardList;
