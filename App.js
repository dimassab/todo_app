import React, { Component } from 'react';

import todosData from './components/todosData'
import TodoItem from './components/TodoItem'

class App extends React.Component {
	constructor(){
		super()
		this.state = {
			todos: todosData
		}
		this.handleChange = this.handleChange.bind(this)
	}
	
	handleChange(id){
		this.setState(prevState => {
			const upadateTodos = prevState.todos.map(todo => {
				if (todo.id == id){
					todo.completed = !todo.completed
				}
				return todo
			})
			return {
				todos: upadateTodos
			}
		})
	}
	
	render(){
	const todoItems = this.state.todos.map(item => <TodoItem key ={item.id} item={item} handleChange={this.handleChange}/>)
    return (
		<div className="todo-list">
		<h5>Список учебных задач</h5>
		{todoItems}
    	</div>
	)
  }
}

export default App;
