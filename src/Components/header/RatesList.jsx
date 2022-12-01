import React from "react";
import Rate from "./Rate";

/**
 * Компонент дл вывода списка рейтингов.
 * В качестве пропсов принимает массив объектов
 */

function RatesList({ listRates }) {
  return (
    <ul>
      {listRates.map((item) => (
        <Rate {...item} />
      ))}
    </ul>
  );
}

export default RatesList;
