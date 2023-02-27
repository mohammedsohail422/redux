import React from "react";
import { useSelector, useDispatch } from "react-redux";

const NormalRedux = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const addTen = () => {
    dispatch({ type: "ADDTEN", payload: 10 });
  };
  return (
    <div>
      <div className="App">
        {counter} <br />
        <button onClick={increment}>inc</button> <br />
        <button onClick={decrement}>dec</button>
        <br />
        <button onClick={addTen}>Add by 10</button>
        <br />
      </div>
    </div>
  );
};

export default NormalRedux;
