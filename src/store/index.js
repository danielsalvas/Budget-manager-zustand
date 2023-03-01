import { create } from "zustand";

  const initialBudget = () => {
    const storedBudget = localStorage.getItem('budget');
    return storedBudget ? Number(storedBudget) : 0;
  };

  const initialExpenses = () => {
    const storedExpenses = localStorage.getItem('expenses');
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  };

export const useStore = create((set, get) => ({
  budget: initialBudget(),
  isValidBudget: false,
  modal: false,
  animationModal: false,
  name: '',
  amount: 0,
  category: '',
  expenses: initialExpenses(),
  editExpense: {},
  filter: '',
  editExpense: {},
  filteredExpenses: [],
  setBudget: (newBudget) => set({ budget: newBudget }),
  setIsValidBudget: (newState) => set({ isValidBudget: newState }),
  setModal: (newState) => set({ modal: newState }),
  setAnimationModal: (newState) => set({ animationModal: newState }),
  setName: (newName) => set({ name: newName }),
  setAmount: (newAmount) => set({ amount: newAmount }),
  setCategory: (newCategory) => set({ category: newCategory }),
  setExpenses: (expenses) => set({ expenses: expenses }),
  setEditExpense: (expense) => set({ editExpense: expense }),
  setFilter: (value) => set({ filter: value }),
  setFilteredExpenses: (newFilteredExpenses) => set({ filteredExpenses: newFilteredExpenses }),
  deleteExpense: (id) => {
    const updatedExpenses = get().expenses.filter(expense => expense.id !== id )

    get().setExpenses(updatedExpenses)
  },
  handleNewExpense: () => {
    get().setModal(true)
    get().setEditExpense({})

    setTimeout(() => {
      get().setAnimationModal(true)
    }, 300);
  },
  handleResetApp: () => {

    const result = confirm('Do you want to reset the app?') 
    
    if (result) {
      get().setExpenses([])
      get().setBudget(0)
      get().setIsValidBudget(false)
    }
  }
}));