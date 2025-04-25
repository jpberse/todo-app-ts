import { create } from 'zustand'
import { mockTodos } from '../mock/mockTodos'
import { type filterValue, type ListOfTodos, type todoCompleted, type todoId, type todoTitle } from '../types'
import { TODO_FILTERS } from '../consts'

interface TodoState {
    todos: ListOfTodos
    filter: filterValue
    handleRemove: ({ id } : todoId) => void
    handleComplete: ({ id, completed } : {id: todoId, completed: todoCompleted}) => void
    handleAddTodo: ({ title }: todoTitle) => void 
    handleFilterChange: (filterChange : filterValue) => void
    handleClearAllcompleted: () => void
}

export const useTodoStore = create<TodoState>()(((set, get) => ({
      todos: mockTodos,
      filter: TODO_FILTERS.All,
      handleRemove: (id) => {
        const { todos } = get()
        const newTodos = todos.filter(todo => todo.id !== id)
        set({ todos: newTodos})
      },
      handleComplete: ({id, completed}) => {
        const { todos } = get()
        const newTodos = todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed
            }
          }
          return todo
        })
        set({ todos: newTodos})
      },
      handleAddTodo: (title) => {
        const { todos } = get()
        const newTodo = {
          title,
          id: crypto.randomUUID(),
          completed: false
        }
        const newTodos = [...todos, newTodo]
        set({ todos: newTodos})
      },
      handleFilterChange: (filterChange) => {
        set({ filter: filterChange })
      },
      handleClearAllcompleted: () => {
        const { todos } = get()
        const newTodos = todos.filter(todo => !todo.completed)
        set({ todos: newTodos})
      }
    }))
  );