import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/containers/Header/Header";
import { Main } from "./components/containers/Main/Main";
import { HomePage } from "./pages/HomePage/HomePage";
import { Details } from "./pages/DetailsPage/DetailsPage";
import { NotFound } from "./pages/NotFoundPage/NotFoundPage";
import { ROUTS_PATHES } from "./constatnts/routs";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path={ROUTS_PATHES.HOME}
            element={
              <HomePage countries={countries} setCountries={setCountries} />
            }
          />
          <Route path={ROUTS_PATHES.DETAILS} element={<Details />} />
          <Route path={ROUTS_PATHES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
