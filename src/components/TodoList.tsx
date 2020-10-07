import React, { useContext } from 'react';
import TodoListItem from '../components/TodoListItem'
import { TodoContextType } from '../contexts/TodoContextType'
import { TodoContext } from '../contexts/TodoContext';

const TodoList = () => { 

  const { todos } = useContext<TodoContextType>(TodoContext);

  return (
    <table className="uk-table">
      <caption>Lista de Tarefas</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Tarefa</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos?.map(todo => {
          
          return <TodoListItem key={todo.id} todo={todo} />
        })}

      </tbody>

    </table>
  )
}

export default TodoList