import { useDispatch, useSelector } from "react-redux";

import {
  selectCurrentPage,
  selectHeroes,
  selectTotalCount,
} from "../../redux/heroes/selector.js";
import { getHeroes } from "../../redux/heroes/operation1.js";

import css from "./Pagination.module.css";

const Pagination = () => {
  let pages = [];

  const dispatch = useDispatch();

  const fullList = useSelector(selectHeroes);

  const totalCount = useSelector(selectTotalCount);

  const currentPage = useSelector(selectCurrentPage);

  const counts = fullList?.data?.count || [];

  const totalPages = Math.ceil(counts / 10);

  for (let index = 0; index < totalPages; index++) {
    pages.push(index + 1);
  }

  const changePage = (page) => {
    if (page !== currentPage) {
      dispatch(getHeroes(page));
    }
  };

  if (totalCount === 0 || fullList.length === 0) return null;

  return (
    <>
      <ul className={css.list}>
        {pages.map((page) => (
          <li
            key={page}
            onClick={() => changePage(page)}
            className={page === currentPage ? css.active : css.item}
          >
            {page}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
