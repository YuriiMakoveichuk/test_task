// import { selectHeroes } from "../../redux/heroes/selector.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getHeroes } from "../../redux/heroes/operation1.js";
import { selectHeroes } from "../../redux/heroes/selector.js";

import Hero from "./Hero.jsx";

import css from "./Heroes.module.css";

const Heroes = () => {
  const dispatch = useDispatch();

  const fullList = useSelector(selectHeroes);

  useEffect(() => {
    dispatch(getHeroes());
  }, [dispatch]);

  const results = fullList?.data?.results || [];

  const heroes = results;
  // console.log(fullList);

  return (
    <>
      <ul className={css.list}>
        {Array.isArray(heroes) &&
          heroes.map((hero) => (
            <li key={hero.id} className={css.card}>
              <Hero hero={hero} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Heroes;
