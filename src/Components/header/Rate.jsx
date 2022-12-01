import React from "react";

/**
 * Компонент для вывода элемента списка рейтингов
 */

function Rate({ name, price, deviation }) {
  return (
    <div>
      <span>{name}</span>
      <span>{price}</span>
      <span>{deviation}</span>
    </div>
  );
}

export default Rate;
