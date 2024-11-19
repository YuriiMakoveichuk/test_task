import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";

import { Section } from "../../components/Section/Section.jsx";
import { Container } from "../../components/Container/Container.jsx";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn.jsx";
import Films from "../../components/Films/Films.jsx";
import Starships from "../../components/Starships/Starships.jsx";

import { getHeroId } from "../../redux/heroes/operation1.js";
import { selectHeroes } from "../../redux/heroes/selector.js";

import css from "./DetailsHeroPage.module.css";

const DetailsHeroPage = () => {
  const { heroId } = useParams();

  const location = useLocation();
  const dispatch = useDispatch();

  const hero = useSelector(selectHeroes);

  const backLinkRef = useRef(location.state?.from ?? "/people");

  useEffect(() => {
    dispatch(getHeroId(heroId));
  }, [dispatch, heroId]);

  const detailsShips = hero.starships;
  const detailsFilms = hero.films;

  return (
    <>
      <Section>
        <Container>
          <GoBackBtn backLinkRef={backLinkRef} />
          <h2 className={css.title}>{hero.name}</h2>
          <div className={css.card}>
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${hero.id}.jpg`}
              alt={hero.name}
              className={css.img}
              width={200}
            />
          </div>
          <Films detailsFilms={detailsFilms} />
          <Starships detailsShips={detailsShips} />
        </Container>
      </Section>
    </>
  );
};

export default DetailsHeroPage;
