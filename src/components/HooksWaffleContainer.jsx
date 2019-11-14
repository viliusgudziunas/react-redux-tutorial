import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyWaffle } from "../redux";

function HooksWaffleContainer() {
  const numOfWaffles = useSelector(state => state.waffle.numOfWaffles);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of waffles - {numOfWaffles}</h2>
      <button onClick={() => dispatch(buyWaffle())}>Buy Waffle</button>
    </div>
  );
}

export default HooksWaffleContainer;
