import{ useState } from 'react'
import { Todos } from './components/Todos'
import { type todoCompleted, type todoId } from './types'
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

  return (
    <>
      <Todos 
        todos={todos} 
        removeTodo={handleRemove}
        completeTodo={handleComplete}
        />
    </>
  )
}

export default App
