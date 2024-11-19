import { useRef } from "react";

import { Section } from "../../components/Section/Section.jsx";
import { Container } from "../../components/Container/Container.jsx";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn.jsx";

import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const backLinkRef = useRef("/");

  return (
    <>
      <Section>
        <Container>
          <div className={css.box}>
            <h1 className={css.title}>404: Page Not Found</h1>
            <p className={css.text}>
              Oops! The page you are looking for does not exist.
            </p>
            <GoBackBtn backLinkRef={backLinkRef} />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default NotFoundPage;
