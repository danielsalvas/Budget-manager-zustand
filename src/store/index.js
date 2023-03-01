import { create } from "zustand";

  const initialBudget = () => {
    const storedBudget = localStorage.getItem('budget');
    return storedBudget ? JSON.parse(storedBudget) : 0;
  };

export const useStore = create((set, get) => ({
  budget: initialBudget(),
  isValidBudget: false,
  modal: false,
  animationModal: false,
  name: '',
  amount: 0,
  category: '',
  expenses: [],
  editExpense: {},
  setBudget: (newBudget) => set({ budget: newBudget }),
  setIsValidBudget: (newState) => set({ isValidBudget: newState }),
  setModal: (newState) => set({ modal: newState }),
  setAnimationModal: (newState) => set({ animationModal: newState }),
  setName: (newName) => set({ name: newName }),
  setAmount: (newAmount) => set({ amount: newAmount }),
  setCategory: (newCategory) => set({ category: newCategory }),
  setExpenses: (expenses) => set({ expenses: expenses }),
  setEditExpense: (expense) => set({ editExpense: expense }),
  deleteExpense: (id) => {
    const updatedExpenses = get().expenses.filter(expense => expense.id !== id )

    get().setExpenses(updatedExpenses)
  }
}));