import React from "react";
import classNames from "classnames";
import { Transaction } from "../Transaction";
import "./style.css";

const Transactions = () => {
  const transactionsClassnames = classNames({
    "mzw-transactions": true,
  });
  //Import transactions from "../data/Budget-1693009890335.json"
  let transactions2 = require("../../data/Budget-1693009890335.json");

  //Only show first 10 transactions in array
  transactions2 = transactions2.slice(0, 10);

  return (
    <div className={transactionsClassnames}>
      <ul className="mzw-transactions__list">
        {transactions2.map((t) => (
          <Transaction key={t.id} transaction={t} />
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
