import React from "react";

/**
 * Компонент дл вывода форматированного блока текущей даты
 */

function DateToday() {
  const today = new Date();
  return <div>{today}</div>;
}

export default DateToday;
