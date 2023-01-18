import React, { FC, useEffect, useState } from "react";
import { fetchTodo } from "./helpers/fetch-todo/fetch-todo";
import { isOdd } from "./helpers/is-odd/is-odd";
import { percentage } from "./helpers/percentage/percentage";

const Demonstrate: FC = () => {
  const [percent, setPercent] = useState("");
  const [total, setTotal] = useState("");
  const [percentageResult, setPercentageResult] = useState(0);

  const [number, setNumber] = useState("");
  const [isOddNumber, setOddNumber] = useState(false);

  const changePercentageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPercent(event.target.value);
    setPercentageResult(+percentage(+event.target.value, +total).toFixed(4));
  };

  const changeTotalHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTotal(event.target.value);
    setPercentageResult(+percentage(+percent, +event.target.value).toFixed(4));
  };

  const changeNumberHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
    setOddNumber(isOdd(+event.target.value));
  };

  return (
    <>
      <h1>Demonstrate</h1>

      <div>
        <span>Percant </span>
        <input name='percent' type='text' value={percent} onChange={changePercentageHandler} />
        <span>of </span>
        <input name='total' type='text' value={total} onChange={changeTotalHandler} />
        <span>is {percentageResult}</span>
      </div>
      <div>
        <span>Is odd</span>
        <input name='number' type='text' value={number} onChange={changeNumberHandler} />
        <span>
          {"? = > "}
          {`${isOddNumber}`}
        </span>
      </div>
    </>
  );
};

export default Demonstrate;
