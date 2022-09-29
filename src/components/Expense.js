import React from "react";

const Expense = ({ income, expense}) => {
  return (
    <>
      <div>
        <div>Your Balance</div>
        <div>${income - expense}</div>
      </div>
      <div>
        <div>
          <div>Income</div>
          <div>${income}</div>
        </div>
        <div>
          <div>Expense</div>
          <div>${expense}</div>
        </div>
      </div>
    </>
  );
};

export default Expense;
