import React from "react";
import Widget from "./Widget";
import Wether from "./Wether";
import Ether from "./Ether";
import List from "./Components/common/List";

/**
 * Основной компонент блока виджетов
 */

function WidgetList() {
  return (
    <section>
      <Widget title="Погода">
        <Wether />
      </Widget>
      <Widget title="Посещаемое">
        <List items={[]} />
      </Widget>
      <Widget title="Карта Германии">Расписание</Widget>
      <Widget title="Телепрограмма">
        <Ether />
        <List items={[]}></List>
      </Widget>
      <Widget title="Эфир">
        <List items={[]}></List>
      </Widget>
    </section>
  );
}

export default WidgetList;
