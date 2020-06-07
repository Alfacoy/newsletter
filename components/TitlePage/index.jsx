//Import style
import style from "./style.module.scss";

const TitlePage = ({ number }) => {
  return (
    <div className={style.boxTitle}>
      <h2>Noticias en Argentina [{number}]</h2>
    </div>
  );
};

export default TitlePage;
