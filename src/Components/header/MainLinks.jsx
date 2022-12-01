import React from "react";

/**
 * Компонент главной навигации.
 * В качестве пропса принимает массив из объектов - название и ссылка элемента навигации
 */

function MainLinks({ titleMainList }) {
  return (
    <section>
      <nav>
        <ul>
          {titleMainList.map((item) => (
            <li>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default MainLinks;
