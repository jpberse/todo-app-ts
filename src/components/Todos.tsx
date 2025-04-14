import { type ListOfTodos } from "../types"
import { Todo } from "./Todo"

interface Props {
    todos: ListOfTodos
}

export const Todos: React.FC<Props> = ({ todos }) => {
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
                        />
                </li>
            ))}
        </ul>
    )
}