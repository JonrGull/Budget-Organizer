import React, { useState, useEffect } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Playstation 4",
    amount: 527.23,
    date: new Date(2020, 2, 14),
  },
  {
    id: "e2",
    title: "Apple Car",
    amount: 60000.0,
    date: new Date(2022, 10, 13),
  },
  {
    id: "e3",
    title: "Giant Teddy Bear",
    amount: 129.78,
    date: new Date(2019, 11, 24), // These days start at 0 and end at 11
  },
  {
    id: "e4",
    title: "Air conditioner",
    amount: 430,
    date: new Date(2021, 4, 19),
  },
];

const App = () => {
  useEffect(() => {
    document.title = "Budget-Organizer";
  }, []);

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
