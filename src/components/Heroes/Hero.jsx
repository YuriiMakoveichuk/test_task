import { Link } from "react-router-dom";
import css from "./Heroes.module.css";

const Hero = ({ hero }) => {
  return (
    <>
      <Link key={hero.id} to={`/people/${hero.id}`}>
        <div className={css.box}>
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${hero.id}.jpg`}
            alt={hero.name}
            className={css.img}
            width={200}
          />
          <div>{hero.name}</div>
        </div>
      </Link>
    </>
  );
};

export default Hero;
