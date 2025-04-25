import { useTodoStore } from "../stores/todoStore"
import { type todoCompleted, type todoId, type Todo as TodoTypes } from "../types"

type Props = TodoTypes

export const Todo: React.FC<Props> = ({ id, title, completed }) => {
    const handleRemove = useTodoStore((state) => state.handleRemove)
    const handleComplete = useTodoStore((state) => state.handleComplete)

    const removeTodo = ({ id } : todoId) => {
        handleRemove(id)
    }

    const completeTodo = ({ id, completed } : { id: todoId, completed: todoCompleted}) => {
        handleComplete({id, completed})
    }

    
    return (
        <div>
            <input 
                type="checkbox"
                checked={completed}
                onChange={(event) => {completeTodo({ id, completed: event.target.checked})}}
            />
            <label>{title}</label>
            <button 
                onClick={() => removeTodo({ id })}
            >Delete</button>
        </div>
    )
}