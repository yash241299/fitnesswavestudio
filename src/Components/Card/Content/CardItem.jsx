import "./CardItem.scss";
import { HeadingTertiary } from "./../../Heading/Sub-Component/HeadingTertiary";

export const CardItem = ({ src, alt, trainerType }) => {
  return (
    <div className="card-item">
      <img src={src} alt={alt} className="card-item__img" />
      <HeadingTertiary text="Annabelle" />
      <p className="card-item__trainer-type">{trainerType}</p>
      <ul className="card-item__social-links">
        {["facebook", "instagram", "twitter"].map((val, key) => {
          return (
            <li key={key} className="card-item__social-links__icon">
              <ion-icon name={"logo-" + val}></ion-icon>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
