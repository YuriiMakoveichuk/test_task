import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Hero from "./Hero.jsx";

import { getHeroes } from "../../redux/heroes/operation1.js";
import {
  selectCurrentPage,
  selectHeroes,
} from "../../redux/heroes/selector.js";

import css from "./Heroes.module.css";

const Heroes = () => {
  const dispatch = useDispatch();

  const fullList = useSelector(selectHeroes);

  const page = useSelector(selectCurrentPage);

  useEffect(() => {
    const currentPage = page || 1;
    dispatch(getHeroes(currentPage));
  }, [dispatch, page]);

  const results = fullList?.data?.results || [];

  const heroes = results;

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
