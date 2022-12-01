import React from "react";
/** Компонент элемента списка
 * В значения пропсов передается
 * - для стилизации иконки/изображения перед текстом элемента списка
 * - текст элемента
 * - ссылка дл перехода
 */
function ListItem({ before, text, href }) {
  return (
    <a href={href}>
      <li style={{ before }}>{text}</li>
    </a>
  );
}

export default ListItem;
