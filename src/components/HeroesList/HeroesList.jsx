import { Container } from "../Container/Container.jsx";
import { Section } from "../Section/Section.jsx";

import Heroes from "../Heroes/Heroes.jsx";
import Pagination from "../Pagination/Pagination.jsx";

const HeroesList = () => {
  return (
    <>
      <Section>
        <Container>
          <Heroes />
          <Pagination />
        </Container>
      </Section>
    </>
  );
};

export default HeroesList;
