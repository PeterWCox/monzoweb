import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import AccountSelector from "../AccountSelector";
import Balance from "../Balance";
import TransactionDetail from "../TransactionDetail";
import Transactions from "../Transactions";
import Map from "../Map";
// import {
//   accountsRequest as fetchAccounts,
//   searchFilter as searchFilterAction,
// } from "../../actions";
import "./style.css";

export const Accounts = () => {
  return (
    <div className="mzw-accounts">
      <div className="mzw-accounts__header-container">
        <div className="mzw-accounts__header">
          <Balance />
          <AccountSelector />
        </div>
      </div>
      <div className="mzw-accounts__transactions">
        <div className="mzw-accounts__transactions__list">
          <label htmlFor="search" className="mzw-accounts__search">
            <span aria-hidden className="mzw-accounts__search__text">
              Search
            </span>
            <input
              // onChange={(event) => updateSearchFilter(event.target.value)}
              id="search"
              className="mzw-accounts__search__input"
              type="text"
              placeholder="Search transactions..."
              // value={searchFilter}
            />
          </label>
          <Transactions />
        </div>
        {/* <div className="mzw-accounts__transactions__detail">
                <TransactionDetail />
              </div> */}
      </div>
      <Route path="/accounts/map" component={Map} />
    </div>
  );
};
