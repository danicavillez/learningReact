import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    // console.log(this.props.todos)
    return this.props.todos.map((todo) =>(
      // for each to do item, what do we want to display?
      // want to display each action item
    <TodoItem key= {todo.id} todo = {todo} />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
