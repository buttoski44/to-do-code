import React from 'react';
import { Form } from './components/todo-Form/Form.component';
import { Todolist } from './components/Todolist/Todolist.component';
import './App.css';


class App extends React.Component{
  constructor(){
    super();

    this.state = { 
      todo : [],
      do : ""
    }
  }

  render(){
    const handleChange = e => { 
      this.setState({do : e.target.value },()=>{console.log(this.state.do)})
    };
    
    const submitHandler = e => { 
      e.preventDefault();
      this.setState({todo :[...this.state.todo,{task : this.state.do, id : Math.random()*1000}], do: ""},()=>{console.log(this.state.todo)})
    }

    return (
      <div className="App">
        <header>
          <h1>ToDo List</h1>
        </header>
        <Form placeholder="Type Here" handleChange={handleChange} submitHandler={submitHandler} inputText={this.state.do}/>
        <Todolist check={this.state.todo}/>
      </div>
    )
  }
} 

export default App;
