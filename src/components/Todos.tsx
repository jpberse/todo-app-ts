import { type todoCompleted, type todoId, type ListOfTodos } from "../types"
import { Todo } from "./Todo"

interface Props {
    todos: ListOfTodos
    completeTodo: ({ id, completed } : {id: todoId, completed: todoCompleted}) => void
    removeTodo: ({ id }: todoId) => void
}

export const Todos: React.FC<Props> = ({ todos, removeTodo, completeTodo }) => {
    return(
        <ul>
            {todos.map(todo => (
                <li key={todo.id} 
                    className={`${todo.completed ? 'completed' : ''}`}>
                    {todo.title}
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        removeTodo={removeTodo}
                        completeTodo={completeTodo}
                        />
                </li>
            ))}
        </ul>
    )
}