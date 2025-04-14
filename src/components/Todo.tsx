import { type todoCompleted, type todoId, type Todo as TodoTypes } from "../types"

interface Props extends TodoTypes {
    removeTodo: ({ id }: todoId) => void
    completeTodo: ({ id, completed } : { id: todoId, completed: todoCompleted}) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, removeTodo, completeTodo }) => {
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
            />
        </div>
    )
}