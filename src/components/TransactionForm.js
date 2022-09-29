import React, { useState } from "react";
import { uniqueId } from "../utils";
const TransactionForm = ({ onNewTransaction }) => {
  const [nameValue, setNameValue] = useState("");
  const [amountValue, setAmountValue] = useState("");

  const addTransaction = (type, event) => {
    event.preventDefault();
    const data = {
      id: uniqueId(),
      name: nameValue,
      amount: parseInt(amountValue),
      type: type,
    };
    onNewTransaction(data);
  };

  return (
    <>
      <div>Add New Transaction</div>
      <form>
        <label>
          Name
          <div>
            <input
              type="text"
              name=""
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            />
          </div>
        </label>
        <label>
          Amount
          <div>
            <input
              type="number"
              name=""
              value={amountValue}
              onChange={(e) => setAmountValue(e.target.value)}
            />
          </div>
        </label>
        <div>
          <button onClick={(e) => addTransaction("income", e)}>
            Add Income
          </button>
          <button onClick={(e) => addTransaction("expense", e)}>
            Add Expense
          </button>
        </div>
      </form>
    </>
  );
};

export default TransactionForm;
