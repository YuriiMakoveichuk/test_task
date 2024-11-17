import { useDispatch, useSelector } from "react-redux";
import css from "./Films.module.css";
import {
  selectError,
  selectFilms,
  selectLoading,
} from "../../redux/films/selector.js";
import { useEffect } from "react";
import { getFilms } from "../../redux/films/operation.js";
import Loader from "../Loader/Loader.jsx";

const Films = ({ detailsFilms }) => {
  const dispatch = useDispatch();

  const films = useSelector(selectFilms);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  if (!detailsFilms || !Array.isArray(detailsFilms)) {
    return <Loader />;
  }

  console.log(films);
  console.log(detailsFilms);

  const filteredFilms = films.filter((film) => detailsFilms.includes(film.id));

  return (
    <>
      <div>{loading && !error && <Loader />}</div>
      {Array.isArray(filteredFilms) && (
        <div>
          <ul className={css.list}>
            {filteredFilms.length > 0 &&
              filteredFilms.map((film) => (
                <li key={film.id} className={css.card}>
                  <div className={css.box}>
                    <img
                      src={`https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`}
                      alt={film.title}
                      className={css.img}
                    />
                    <div>{film.title}</div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Films;
