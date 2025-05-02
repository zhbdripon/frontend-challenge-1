import { useRecoilState } from 'recoil'
import { todoState } from '../atoms'
import { Todo } from '@my-todos/shared-types'

import { saveTodosToLocalStorage } from '../utils'
import { useEffect } from 'react';

interface useTodosReturn {
    todos: Todo[];
    addTodo: (newTodo: Todo) => void;
    removeTodo: (id: string) => void;
    updateTodo: (id: string, updatedTodo: Partial<Todo>) => void;
}

export function useTodos(): useTodosReturn {
    const [todos, setTodos] = useRecoilState(todoState)

    useEffect(() => {
        saveTodosToLocalStorage(todos);
    }, [todos])

    const addTodo = (newTodo: Todo) => {
        setTodos([...todos, newTodo]);
    }

    const removeTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const updateTodo = (id: string, updatedTodo: Partial<Todo>) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, ...updatedTodo } : todo)));
    }

    return {
        todos,
        addTodo,
        removeTodo,
        updateTodo,
    }

}