import { type ListOfTodos } from "../types"
import { Todo } from "./Todo"

interface Props {
    todos: ListOfTodos,
    removeTodo: (id: string) => void
}

export const Todos: React.FC<Props> = ({ todos, removeTodo }) => {
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
                        />
                </li>
            ))}
        </ul>
    )
}