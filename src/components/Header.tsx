import { todoTitle } from "../types"
import { CreateTodo } from "./CreateTodo"

interface Props {
    addTodo: (title: todoTitle) => void
}

export const Header: React.FC<Props> = ({ addTodo }) => {
    return (
        <header>
            <h1>Todo App</h1>

            <CreateTodo 
                saveTodo={addTodo}
            />
        </header>
    )
}