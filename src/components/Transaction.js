import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  // Access Delete function from Context API
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount > 0 ? "+" : "-";
  const classBar = transaction.amount > 0 ? "plus" : "minus";

  return (
    <>
      <li key={transaction.id} className={classBar}>
        {transaction.text}{" "}
        <span>
          {sign} ${Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
