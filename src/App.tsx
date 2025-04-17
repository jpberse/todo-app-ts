import{ useState } from 'react'
import { filterValue, type todoCompleted, type todoId, type todoTitle } from './types'
import { Header } from './components/Header'
import { Todos } from './components/Todos'
import { Footer } from './components/Footer'
import { TODO_FILTERS } from './consts'
import './App.css'

const mockTodos = [
  {
    id:"1",
    title: 'todo 1',
    completed: false
  },
  {
    id:"2",
    title: 'todo 2',
    completed: false
  },
  {
    id:"3",
    title: 'todo 3',
    completed: false
  },
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<filterValue>(TODO_FILTERS.All)

  const handleRemove = ({ id } : todoId) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  
  const handleComplete = ({ id, completed } : {id : todoId, completed: todoCompleted}) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo, 
          completed
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  const handleFilterChange = (filter: filterValue) => {
    setFilterSelected(filter)
  }

  const handleClearAllcompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = ({ title }: todoTitle) => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const CompleteTodos = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <>
      <Header addTodo={handleAddTodo}/>
      <Todos 
        todos={filteredTodos} 
        removeTodo={handleRemove}
        completeTodo={handleComplete}
        />
      <Footer 
        activeCount={activeCount}
        completedCount={CompleteTodos}
        filterSelected={filterSelected}
        onClearCompleted={handleClearAllcompleted}
        handleFilterChange={handleFilterChange}
      />
    </>
  )
}

export default App
