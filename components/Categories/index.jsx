//Import Next/React
import Link from "next/link";
//Import Styles
import style from "./style.module.scss";

const Categories = () => {
  const temas = [
    "economía",
    "salud",
    "ciencia",
    "tecnología",
    "entretenimiento",
    "deportes",
  ];

  const links = temas.map((tema, index) => (
    <li key={index}>
      <Link href="/categoria/[query]" as={`/categoria/${tema}`}>
        <a>{tema[0].toUpperCase() + tema.slice(1)}</a>
      </Link>
    </li>
  ));

  return (
    <nav>
      <ul className={style.categories}>{links}</ul>
    </nav>
  );
};

export default Categories;
