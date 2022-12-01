import React from "react";

/** Компонент дл отображения Промоблока
 * Принимает в качестве пропса:
 * - атрибут дл картинки блока
 * - подпись дл картинки
 * -текст
 */

function PromoToday({ src, label, text }) {
  return (
    <>
      <figure>
        <img src={src} alt=""></img>
        <figcaption>{label}</figcaption>
      </figure>
      <div>{text}</div>
    </>
  );
}

export default PromoToday;
