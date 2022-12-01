import React from "react";
import ListItem from "./ListItem";
/**
 * Общий компонент дл вывода списка.
 В качестве пропсов берет объект для стилизации списка и массив оъектов для отображени элементов списка 
 */
function List({ listStyle, items }) {
  return (
    <ul style={{ listStyle: listStyle }}>
      {items.map((item) => (
        <ListItem {...item} />
      ))}
    </ul>
  );
}

export default List;
