import React from "react";
import TypesSearch from "./TypesSearch";
import InputSearch from "./InputSearch";

/**
 * Главный компонент блока поиска
 */

function Search({ logo }) {
  const typesSearch = [];
  return (
    <>
      <img src={logo} alt="логотип компании" />
      <TypesSearch types={typesSearch} />
      <InputSearch />
      <p>Найдется все. Например, фаза луны сегодня</p>
    </>
  );
}

export default Search;
