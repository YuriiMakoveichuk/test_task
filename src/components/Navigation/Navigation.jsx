import clsx from "clsx";
import { NavLink } from "react-router-dom";

import { Container } from "../Container/Container.jsx";

import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <header className={css.header}>
        <Container>
          <nav className={css.nav}>
            <NavLink
              className={({ isActive }) =>
                clsx(css.link, isActive && css.active)
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx(css.link, isActive && css.active)
              }
              to="/people"
            >
              Heroes
            </NavLink>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Navigation;
