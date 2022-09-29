import React from "react";

const TransactionHistory = ({ transactions, onDeleteTransaction }) => {
  return (
    <div>
      <div>Transaction History</div>
      <ul>
        {transactions.map((data) => (
          <li key={data.id}>
            {data.name} ${data.amount}
            <button onClick={() => onDeleteTransaction(data.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
