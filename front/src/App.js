import React from "react";
import Home from "./components/Home";
import Cards from "./components/shared/Cards";
import UseCaseCards from "./components/shared/UseCases";
const App = () => {
  return (
    <>
      <Home />;
      <Cards />;
      <UseCaseCards />
    </>
  );
};

export default App;
