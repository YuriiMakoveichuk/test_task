import { useSelector } from "react-redux";

import Loader from "../../components/Loader/Loader.jsx";
import HeroesList from "../../components/HeroesList/HeroesList";

import { selectError, selectLoading } from "../../redux/heroes/selector.js";

import css from "./HeroesPage.module.css";

const HeroesPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <>
      <h2 className={css.title}> Star Wars </h2>
      <div>{loading && !error && <Loader />}</div>
      <HeroesList />
    </>
  );
};

export default HeroesPage;
