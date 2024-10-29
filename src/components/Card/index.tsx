import { ICardProps } from "../../interfaces";
import "./style.css";

const Card = ({ content }: ICardProps) => {
  return (
    <div className="card">
      <img
        className="img-card"
        src={content.image}
        alt={`representação ${content.title}`}
      />
      <div className="card-content">
      <span className="span-card">{`${content.title}`}</span>
      <p className="p-card">{content.description}</p>
      </div>
    </div>
  );
};

export default Card;