import{ useState } from 'react'
import { Todos } from './components/Todos'
import { filterValue, type todoCompleted, type todoId } from './types'
import './App.css'
import { Footer } from './components/Footer'
import { TODO_FILTERS } from './consts'

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

  const activeCount = todos.filter(todo => !todo.completed).length
  const CompleteTodos = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <>
      <Todos 
        todos={filteredTodos} 
        removeTodo={handleRemove}
        completeTodo={handleComplete}
        />
      <Footer 
        activeCount={activeCount}
        completedCount={CompleteTodos}
        filterSelected={filterSelected}
        onClearCompleted={() => {}}
        handleFilterChange={handleFilterChange}
      />
    </>
  )
}

export default App
