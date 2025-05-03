import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';

import Heading from './Heading';
import Input from './Input';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    };

    this.submitTodo = this.submitTodo.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  toggleComplete(todoIndex) {
    let todos = this.state.todos;
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    });
    this.setState({ todos });
  }

  deleteTodo(todoIndex) {
    let { todos } = this.state;
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex);
    this.setState({ todos });
  }

  inputChange(inputValue) {
    console.log('Input Value:', inputValue);
    this.setState({ inputValue });
  }

  submitTodo() {
    const { inputValue, todos } = this.state;

    if (inputValue.trim() === '') return;

    const newTodo = {
      title: inputValue,
      todoIndex: todos.length,
      complete: false
    };

    const updatedTodos = [...todos, newTodo];

    this.setState({
      todos: updatedTodos,
      inputValue: ''
    }, () => {
      console.log('State:', {
        inputValue: this.state.inputValue,
        todos: this.state.todos,
        type: this.state.type
      });
    });
  }

  render() {
    const { inputValue, todos } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={this.inputChange}
          />
          <TodoList
            todos={todos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />
          <TouchableOpacity style={styles.submitButton} onPress={this.submitTodo}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  },
  submitButton: {
    backgroundColor: '#ffffff',
    height: 50,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 10,
    marginBottom: 30
  },
  submitButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500'
  }
});

export default App;
