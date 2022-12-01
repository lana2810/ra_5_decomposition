import React from "react";

/**
 * Компонент главного баннера
 * Пропсы - ссылка и src для картинки
 */

function Banner({ href, src }) {
  return (
    <a href={href}>
      <img src={src} alt="" />
    </a>
  );
}

export default Banner;
