import React from "react";
import categories from "../data/categories";

type Props = {
  onSelectCategory: (category: string) => void;
};

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      title="filter by category"
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
