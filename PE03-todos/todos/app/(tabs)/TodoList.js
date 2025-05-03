import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

// TodoList receives the todo array and two action functions from App.js
const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  // Map each todo into a <Todo /> component
  const todoItems = todos.map((todo, i) => (
    <Todo
      key={i}
      todo={todo}
      deleteTodo={deleteTodo}
      toggleComplete={toggleComplete}
    />
  ));

  return (
    <View>
      {todoItems}
    </View>
  );
};

export default TodoList;
