export interface Todo {
    id: string
    title: string
    completed: boolean
}

export type todoId = pick<Todo, 'id'>
export type todoTitle = pick<Todo, 'title'>
export type todoCompleted = pick<Todo, 'completed'>

export type ListOfTodos = Todo[]