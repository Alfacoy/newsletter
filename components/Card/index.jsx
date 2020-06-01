import style from "./style.module.scss";

const Card = ({ image, title, url, description }) => (
  <div className={style.card}>
    <a href={url} target="_blank">
      <figure>
        <img className={style.cardImg} src={image} alt={title} />
      </figure>
      <div className={style.cardContent}>
        <h2 className={style.cardTitle}>{title}</h2>
      </div>
    </a>
  </div>
);

export default Card;
