import { useState } from "react";
import useSWR from "swr";

import CardList from "./CardList";

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const SearchBar = () => {
  /* UseState  */
  const [categoria, setCategoria] = useState("general");
  const [pais, setPais] = useState("ar");
  const [query, setQuery] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  /* Fetch */
  const url = "https://newsapi.org/v2/top-headlines";
  const apiKey = "6f444439c3c04c9aacb89e02143b3057";

  const { data, error } = useSWR(
    `${url}?pageSize=4&category=${categoria}&country=${pais}&apiKey=${apiKey}`,
    fetcher
  );

  let news = data?.articles;
  if (!data) news = "Loading...";
  if (error) news = "Failed to fetch the news";
  /*   const [page, setPage] = useState(0);
const url = "https://newsapi.org/v2/top-headlines";
const apiKey = "6f444439c3c04c9aacb89e02143b3057";
const pais = "br";
const { data, error } = useSWR(
  `${url}?pageSize=${page}&country=${pais}&apiKey=${apiKey}`,
  fetcher
);

let news = data?.articles;
if (!data) news = "Loading...";
if (error) news = "Failed to fetch the news";

function handleChange(event) {
  event.target.value == "" ? setPage(0) : setPage(event.target.value);
}
*/
  {
    /*      <input type="text" onChange={handleChange} /> */
  }

  {
    /*         <article className="grid-1">
          {news != "Loading..." && news != "Failed to fetch the news" ? (
            <CardList data={news} />
          ) : (
            <span>{news}</span>
          )}
        </article> */
  }

  console.log(news);
  /* Handle Functions */
  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleChangeCat = event => {
    switch (event.target.value) {
      case "General":
        setCategoria("general");
        break;
      case "Economia":
        setCategoria("business");
        break;
      case "Entretenimiento":
        setCategoria("entertainment");
        break;
      case "Salud":
        setCategoria("health");
        break;
      case "Ciencia":
        setCategoria("science");
        break;
      case "Tecnologia":
        setCategoria("technology");
        break;
      case "Deportes":
        setCategoria("sports");
        break;
    }
  };

  const handleClick = () => {
    setIsSearch(true);
  };

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Categoria</label>
            <select onChange={handleChangeCat}>
              <option>General</option>
              <option>Economia</option>
              <option>Entretenimiento</option>
              <option>Salud</option>
              <option>Ciencia</option>
              <option>Tecnologia</option>
              <option>Deportes</option>
            </select>
          </div>

          <div>
            <label>Pais</label>
            <select>
              <option>Argentina</option>
              <option>Mexico</option>
              <option>Italia</option>
              <option>Estados Unidos</option>
            </select>
          </div>

          <div>
            <label>Tema</label>
            <input type="text" placeholder="Ej: coronavirus" />
          </div>

          <button onClick={handleClick}>Buscar Noticias</button>
        </form>
      </section>

      <article>
        {isSearch ? <p>Buscando datos</p> : <p>Sin busqueda en curso</p>}
      </article>

      <article className="grid-1">
        <CardList data={news} />
      </article>

      <style jsx>{`
        section {
          background-color: #a6b1e1;
          padding: 30px 0;
          margin-bottom: 20px;
        }

        article {
          margin-bottom: 50px;
        }

        div {
          margin: 0 10px;
        }

        form {
          display: flex;
        }

        label {
          display: block;
        }
      `}</style>
    </>
  );
};

export default SearchBar;
