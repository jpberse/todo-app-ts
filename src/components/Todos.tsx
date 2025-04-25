import { TODO_FILTERS } from "../consts"
import { useTodoStore } from "../stores/todoStore"
import { Todo } from "./Todo"

export const Todos: React.FC = () => {
    const todos = useTodoStore(state => state.todos)
    const filterSelected = useTodoStore(state => state.filter)

    const filteredTodos = todos.filter(todo => {
        if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
        if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
        return todos
    })
    
    return(
        <ul>
            {filteredTodos.map(todo => (
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