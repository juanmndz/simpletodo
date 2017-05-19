import React, { Component } from "react";
import { connect } from "react-redux";

import { createTodo, completedTodo, deleteTodo, deletedAllCompletedTodo } from "./actions/todos";
import "./App.css";

class App extends Component {
  state = {
    text: ""
  };

  _handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  _handleSubmit = e => {
    e.preventDefault();
    this.props.createTodo(this.state.text);
    this.setState({
      text: ""
    });
  };

  _handleCompleted = id => {
    this.props.completedTodo(id);
  };

  _handleDelete = id => {
    this.props.deleteTodo(id);
  };

  _handleDeletedAllCompleted = () => {
    this.props.deletedAllCompletedTodo();
  }


  render() {
    return (
      <div className="App">
        <form className="App-intro" onSubmit={this._handleSubmit}>
          <input
            value={this.state.text}
            onChange={this._handleChange}
            type="text"
            name="text"
            placeholder="Create a todo..."
          />
        </form>
        <br />
        {this.props.todos.map(({ text, id, completed }) => (
          <div key={id}>
            {text}
            <input
              onChange={() => this._handleCompleted(id)}
              type="checkbox"
              value={completed}
            />
            <button onClick={() => this._handleDelete(id)}>Delete Todo</button>
          </div>
        ))}
        <br/>
        <hr/>
        <hr/>
        <button onClick={this._handleDeletedAllCompleted}>Delete All Completed</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos
  }),
  { createTodo, completedTodo, deleteTodo, deletedAllCompletedTodo }
)(App);
