import React, { useCallback, useReducer } from "react";
import Table from "./Table";

const initialState = {
  count: "",
  tableData: [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ],
};

const SET_COUNT = "SET_COUNT";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        count: action.count,
      };
  }
};

function Sweetpang() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClickBoard = useCallback(() => {
    dispatch({ type: SET_COUNT, count: "0" });
  }, []);

  return (
    <>
      <Table onClick={onClickBoard} tableData={state.tableData} />
      {<div>{state.count}</div>}
    </>
  );
}

export default Sweetpang;
