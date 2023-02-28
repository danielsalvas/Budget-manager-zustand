import { create } from "zustand";

export const useStore = create((set, get) => ({
  budget: 0,
  isValidBudget: false,
  modal: false,
  animationModal: false,
  name: '',
  amount: 0,
  category: '',
  expenses: [],
  setBudget: (newBudget) => set({ budget: newBudget }),
  setIsValidBudget: (newState) => set({ isValidBudget: newState }),
  setModal: (newState) => set({ modal: newState }),
  setAnimationModal: (newState) => set({ animationModal: newState }),
  setName: (newName) => set({ name: newName }),
  setAmount: (newAmount) => set({ amount: newAmount }),
  setCategory: (newCategory) => set({ category: newCategory }),
  setExpenses: (Expenses) => set({ expenses: Expenses }),

}));