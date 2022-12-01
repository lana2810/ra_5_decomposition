import React from "react";
import Header from "../Header";
import Search from "../Search";
import Banner from "./Banner";
import WidgetList from "../WidgetList";

/**Главный компонент приложения. Точка входа.
Логически страницу можно разделить на 4 части */

function Main() {
  return (
    <>
      <Header />
      <Search />
      <Banner />
      <WidgetList />
    </>
  );
}

export default Main;
