const Card = ({ image, title, url, description }) => (
  <div className="card">
    <a href={url} target="_blank">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="content">
        <h2>{title}</h2>
      </div>
    </a>

    <style jsx>{`
      .card {
        padding: 10px 0;
        border-top: 1px solid black;
        border-radius: 5px;
        box-shadow: 1px 2px 10px black;

        background-color: #f4eeff;
      }

      .content {
        padding: 0 5px;
      }

      a {
        color: black;
        text-decoration: none;
      }

      h2 {
        margin: 0;
        font-size: 1.2em;
        color: #424874;
      }

      img {
        width: 100%;
        height: auto;
        display: block;
      }

      @media screen and (min-width: 720px) {
        .card {
          padding: 10px 10px;
          border-top: 0px solid black;
          margin: 10px;
        }
      }
    `}</style>
  </div>
);

export default Card;
