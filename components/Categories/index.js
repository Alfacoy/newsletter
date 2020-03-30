//Import Styles
import style from "./style.scss";
//Import Next/React
import Link from "next/link";

const Categories = () => {
  const temas = [
    "economia",
    "salud",
    "ciencia",
    "tecnologia",
    "entretenimiento",
    "deportes"
  ];
  const links = temas.map((i, index) => (
    <Link key={index} href="/categoria/[query]" as={`/categoria/${i}`}>
      <a>{i[0].toUpperCase() + i.slice(1)}</a>
    </Link>
  ));

  return <nav className={style.categories}>{links}</nav>;
};

export default Categories;
