import React from "react";
import Tr from "./Tr";

function Table({ onClick, tableData }) {
  return (
    <>
      <table onClick={onClick}>
        {Array(tableData.length)
          .fill()
          .map((tr, i) => (
            <Tr key={i} rowData={tableData[i]} />
          ))}
      </table>
    </>
  );
}

export default Table;
