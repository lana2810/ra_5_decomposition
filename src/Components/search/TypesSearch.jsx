import React from "react";

/**
 * Компонент списка типов поиска
 */

function TypesSearch({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

export default TypesSearch;
