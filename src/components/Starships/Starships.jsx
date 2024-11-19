import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Loader from "../Loader/Loader.jsx";

import { getStarships } from "../../redux/starships/operation.js";
import {
  selectError,
  selectLoading,
  selectStarships,
} from "../../redux/starships/selector.js";

import css from "./Starships.module.css";

const Starships = ({ detailsShips }) => {
  const dispatch = useDispatch();

  const starships = useSelector(selectStarships);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getStarships());
  }, [dispatch]);

  if (!detailsShips || !Array.isArray(detailsShips)) {
    return <Loader />;
  }

  const filteredStarships = starships.filter((ship) =>
    detailsShips.includes(ship.id)
  );

  return (
    <>
      <div>{loading && !error && <Loader />}</div>
      {Array.isArray(filteredStarships) && (
        <div className={css.box}>
          <ul className={css.list}>
            {filteredStarships.length > 0 &&
              filteredStarships.map((ship) => (
                <li key={ship.id}>{ship.name}</li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Starships;
