import React, { Fragment } from "react";
import CategoryIcon from "../CategoryIcon";
import {
  getHumanCostFromInteger,
  timeSince,
  processTransactionTitle,
  processTransactionAmount,
} from "../../helpers";
import "./style.css";

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-noninteractive-tabindex,max-len  */

export const Transaction = ({ transaction }) => {
  function processTransactionLocalAmount(transaction) {
    if (transaction.local_currency !== transaction.currency) {
      return getHumanCostFromInteger(
        transaction.local_amount,
        transaction.local_currency
      );
    }

    return false;
  }

  function processTransactionCategory(transaction) {
    if (transaction.category) {
      if (
        transaction.category === "mondo" ||
        transaction.category === "monzo"
      ) {
        return "";
      }

      return transaction.category;
    }

    return "general";
  }

  function processTransactionExtraInfo(transaction) {
    if (transaction.metadata && transaction.metadata.faster_payment) {
      return "Bank transfer";
    }

    if (transaction.merchant) {
      if (transaction.merchant.online) {
        return "Online";
      }
      if (transaction.merchant.address && transaction.merchant.address.city) {
        return transaction.merchant.address.city;
      }
    }

    return "";
  }

  console.log({
    transaction: transaction,
  });

  var date = new Date(transaction.Date);
  var time = new Date(transaction.Time);
  var dateTime = new Date(date.getTime() + time.getTime());

  var mappedTransaction = {
    id: transaction.id,
    created: dateTime,
    amount: transaction.Amount,
    Name: transaction.Name,
  };

  const title = processTransactionTitle(mappedTransaction);
  const amount = processTransactionAmount(mappedTransaction);
  const extraInfo = processTransactionExtraInfo(mappedTransaction);
  const created = timeSince(new Date(mappedTransaction.created));
  const transactionLogoClassName = "mzw-transaction__logo";
  let iconOrLogo = <CategoryIcon className={transactionLogoClassName} />;

  return (
    <li
      key={transaction.id}
      // onClick={() => setActiveTransaction(transaction)}
      onKeyPress={() => setActiveTransaction(transaction)}
      className="mzw-transaction"
      tabIndex="0"
    >
      {/* Icon */}
      <div className="mzw-transaction__logo-container">{iconOrLogo}</div>

      {/* Detail */}
      <div className="mzw-transaction__detail">
        {/* Title */}
        <div
          className={
            transaction.decline_reason ? "mzw-transaction__detail-decline" : ""
          }
        >
          {title}
        </div>

        {/* Date */}
        <div className="mzw-transaction__info">
          <span>{created}</span>
          {extraInfo && (
            <Fragment>
              <span>&nbsp;&mdash;&nbsp;</span>
              <span>{extraInfo}</span>
            </Fragment>
          )}
        </div>
      </div>

      {/* Amount */}
      <div
        className={`
            mzw-transaction__amount
            ${!amount.includes("-") ? "mzw-transaction__amount-positive" : ""}
            ${
              transaction.decline_reason
                ? "mzw-transaction__detail-decline"
                : ""
            }
          `}
      >
        {amount}
      </div>
    </li>
  );
};
