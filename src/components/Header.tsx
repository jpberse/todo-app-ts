import { useTodoStore } from "../stores/todoStore"
import { CreateTodo } from "./CreateTodo"

export const Header: React.FC = () => {
    const todos = useTodoStore(state => state.todos)
    const activeCount = todos.filter(todo => !todo.completed).length

    return (
        <header>
            <section className="header-text">                
                <h1>Todo App</h1>
                <span>
                    <strong>{activeCount}</strong> Todos left
                </span>
            </section>

            <CreateTodo />
        </header>
    )
}