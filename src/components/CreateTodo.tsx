import React, { useState } from "react"
import { type todoTitle } from "../types"
import { useTodoStore } from "../stores/todoStore"

export const CreateTodo: React.FC = () => {
    const [inputValue, setInputValue] = useState('')
    const handleAddTodo = useTodoStore((state) => state.handleAddTodo)

    const saveTodo = ({ title }: todoTitle) => {
        handleAddTodo(title)
    }

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