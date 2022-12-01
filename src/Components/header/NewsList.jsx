import React from "react";
import List from "../common/List";

/**
 * Компонента для выводы списка новостей,
 * который по сути являетс компонентом List с определенными пропсами
 */

function NewsList({ list }) {
  return <List listStyle={[]} items={list} />;
}

export default NewsList;
