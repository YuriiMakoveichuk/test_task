import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import HeroesPage from "./pages/HeroesPage/HeroesPage.jsx";
import DetailsHeroPage from "./pages/DetailsHeroPage/DetailsHeroPage.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<HeroesPage />} />
        <Route path="/people/:heroId" element={<DetailsHeroPage />} />
      </Routes>
    </>
  );
}

export default App;
