import { type Todo as TodoTypes } from "../types"

type Props = TodoTypes

export const Todo: React.FC<Props> = ({ id, title, completed}) => {
    return (
        <div>
            <input 
                type="checkbox"
                checked={completed}
                onChange={() => {}}
            />
            <label>{title}</label>
            <button 
                onClick={() => {}}
            />
        </div>
    )
}