import React from "react";
/**
 * Компонент статуса - эфир.
 * В зависимости от статуса рендертся разный контент
 */
function Ether({ status }) {
  return <div>{status ? <></> : <></>}</div>;
}

export default Ether;
