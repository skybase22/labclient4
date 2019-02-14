import React, {Component} from 'react';
import './App.css';
import TaskList from './todo/TaskList'
import InputTask from "./todo/InputTask";
import Github from "./github";

class App extends Component {

   state = {
       tasks: [{id: 1, task: 'Do homework',where : 'home'},
               {id: 2, task: 'Read book',where : 'library'}],
       id:3,user:''
   }

   addTask = (task,where) => {
       this.setState({
                tasks: [...this.state.tasks, {id: this.state.id,task,where } ],
                id: this.state.id+1  })
   }
   addUser = () =>
   {
     this.setState({
      user: this.state.user

     })
   }

   render() {   


       return (
           <div className="App">
               <h1>Todo</h1>
               <TaskList tasks={this.state.tasks}/>
               <InputTask addTask={this.addTask} id={this.state.id} user= {this.state.user}/>
               <br/>
               <Github user = {this.state.user}/>
           </div>
       );
   }
}

export default App;