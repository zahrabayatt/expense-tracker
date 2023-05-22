"use client";
import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm, { ExpenseFormData } from "./ExpenseForm";

const ExpenseTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm onSubmit={handleSubmitExpense} />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={handleSelectCategory} />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={handleDeleteExpense} />
    </>
  );

  function handleDeleteExpense(id: number) {
    setExpenses(expenses.filter((e) => e.id !== id));
  }

  function handleSelectCategory(category: string) {
    setSelectedCategory(category);
  }

  function handleSubmitExpense(expense: ExpenseFormData) {
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
  }
};

export default ExpenseTracker;
