import React, { Component } from "react";
import { connect } from 'react-redux';

import { createTodo } from './actions/todos'
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
    this.setstate({
      text: ''
    })
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
        { this.props.todos.map(({text, id}) => (
          <div key={id}>
            {text}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(state => ({
  todos: state.todos
}), {createTodo})(App)
