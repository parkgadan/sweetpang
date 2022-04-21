import React from "react";
import Td from "./Td";

function Tr({ rowData }) {
  return (
    <>
      <tr>
        {Array(rowData.length)
          .fill()
          .map((td, i) => (
            <Td key={i}>{""}</Td>
          ))}
      </tr>
    </>
  );
}

export default Tr;
