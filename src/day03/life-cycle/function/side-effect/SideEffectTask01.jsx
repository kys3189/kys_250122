import React, { useEffect, useState, use } from 'react';

// https://jsonplaceholder.typicode.com/todos
// todos에서 false인 todos만 
// 내림차순으로 변경 후 10개만 가져와서 화면에 타이틀을 출력한다.

const SideEffectTask01 = () => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      if(!response.ok) throw new Error("데이터를 불러올 수 없습니다.");
      const todos = await response.json()
      return todos
    }
  
    getTodos()
    .then((todos) => todos.reverse())
    .then((todos) => todos.slice(0, 10))
    .then((todos) => todos.map(({title}) => title))
    .then(setTodos)
    .catch(console.error)
  }, [])

  const todoList = todos.length && todos.map((title, i) => (
    <li key={i}>{title}</li>
  ))
  
  return (
    <div>
      <ul>
        {todoList}
      </ul>
    </div>
  );
};

export default SideEffectTask01;