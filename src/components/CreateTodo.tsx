import React, { useState } from "react"
import { todoTitle } from "../types"

interface Props {
    saveTodo: (title: todoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        saveTodo({ title: inputValue})
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new todo"
                value={inputValue}
                autoFocus
                onChange={(e) => setInputValue(e.target.value)}
            />
        </form>
    )
}