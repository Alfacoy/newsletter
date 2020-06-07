import style from "./style.module.scss";

const Card = ({ image, title, url }) => (
  <div className={style.card}>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <figure>
        <img className={style.cardImg} loading="lazy" src={image} alt={title} />
      </figure>
      <div>
        <h3 className={style.cardTitle}>{title}</h3>
      </div>
    </a>
  </div>
);

export default Card;
