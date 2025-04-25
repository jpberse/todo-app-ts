import { Filters } from "./Filters"
import { useTodoStore } from "../stores/todoStore"


export const Footer: React.FC = () => {
    const todos = useTodoStore(state => state.todos)
    const handleClearAllcompleted = useTodoStore(state => state.handleClearAllcompleted)

    const activeCount = todos.filter(todo => !todo.completed).length
    const completedCount = todos.length - activeCount

    const onClearCompleted = () => {
        handleClearAllcompleted()
    }

    return (
        <footer>
            <span>
                <strong>{activeCount}</strong> Todos left
            </span>

            <Filters />

            {
                completedCount > 0 && (
                    <button
                        onClick={onClearCompleted}
                    >
                        Clear completed
                    </button>
                )
            }
        </footer>
    )
}