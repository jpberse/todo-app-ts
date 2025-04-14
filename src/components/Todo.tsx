import { type Todo as TodoTypes } from "../types"

interface Props extends TodoTypes {
    removeTodo: (id: string) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, removeTodo}) => {
    return (
        <div>
            <input 
                type="checkbox"
                checked={completed}
                onChange={() => {}}
            />
            <label>{title}</label>
            <button 
                onClick={() => removeTodo(id)}
            />
        </div>
    )
}