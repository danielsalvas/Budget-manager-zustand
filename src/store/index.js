import { create } from "zustand";

export const useStore = create((set, get) => ({
  budget: 0,
  isValidBudget: false,
  activeFilter: 'all',
  filteredTodos: [],
  setBudget: (newBudget) => set({ budget: newBudget }),
  setIsValidBudget: (newState) => set({ isValidBudget: newState }),
  setActiveFilter: (newActiveFilter) => set({ activeFilter: newActiveFilter }),
  setFilteredTodos: (newFilteredTodos) => set({ filteredTodos: newFilteredTodos }),
  addTodo: (title) => {

    const todos = get().todos
    const lastId = todos.length > 0 ? todos[todos.length -1].id : 1;
      
      const newTodo = {
        id: lastId + 1,
        title,
        completed: false
      }
  
      const todoList = [...todos]
      todoList.push(newTodo)
  
      get().setTodos(todoList);
  },
  handleSetCompleted: (id) => {

    const todos = get().todos
    const updatedList = todos.map( todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed}
      }

      return todo;
    })

    get().setTodos(updatedList)
  },
  handleDelete: (id) => {

    const todos = get().todos
    const updatedList = todos.filter( todo => todo.id !== id)
    get().setTodos(updatedList)
  },
  handleClearCompleted: () => {

    const todos = get().todos
    const updatedList = todos.filter( todo => !todo.completed)
    get().setTodos(updatedList)
  },
  showAllTodos: () => {
    get().setActiveFilter('all')
  },
  showActiveTodos: () => {
    get().setActiveFilter('active')
  },
  showCompletedTodos: () => {
    get().setActiveFilter('completed')
  }
}));