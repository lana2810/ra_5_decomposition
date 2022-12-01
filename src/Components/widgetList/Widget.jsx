import React from "react";

/**
 * Компонент обертка для стилизации всех виджетов
 */

function Widget({ href, title }) {
  return <a href={href}>{title}</a>;
}

export default Widget;
