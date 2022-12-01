import React from "react";
import MainLinks from "./MainLinks";
import DateToday from "./DateToday";
import NewsList from "./NewsList";
import RatesList from "./RatesList";
import PromoToday from "./PromoToday";

/**
 *
 */

function Header() {
  return (
    <>
      <MainLinks titleMainList={[]} />
      <DateToday />
      <NewsList />
      <RatesList />
      <PromoToday />
    </>
  );
}

export default Header;
