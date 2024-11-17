import { Link } from "react-router-dom";
import { Container } from "../../components/Container/Container.jsx";
import { Section } from "../../components/Section/Section.jsx";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Section>
        <Container>
          <h1 className={css.title}>Star Wars</h1>
          <p className={css.text}>
            We are glad to see you on our website. Here you can meet and learn
            about the characters from the Star Wars movies. You can also find
            out in which parts of the movie they played and on which ships they
            traveled.
          </p>
          <div className={css.box}>
            <Link className={css.link} to="/people">
              Let&apos;s get started
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
