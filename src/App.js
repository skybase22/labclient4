import React, {Component} from 'react';
import './App.css';
import Axios from "axios";
import TaskList from './todo/TaskList'
import InputTask from "./todo/InputTask";
import Github from "./github";

class App extends Component {

   state = {
       tasks: [{id: 1, task: 'Do homework'},
               {id: 2, task: 'Read book'}],
        t :[{id: 3,where:'home'}],
       id:4,user:'',
       data: null,
   }

   addTask = (task,where) => {
       this.setState({
                tasks: [...this.state.tasks, {id: this.state.id,task } ],
                t:[...this.state.t, {id: this.state.id,where}],
                id: this.state.id+1  })
   }
   addUser = (user) =>
   {
    this.fetchUser(user)
     this.setState({
      user: user
     })
     
   }

   fetchUser = (USER) => {
    Axios.get(`https://api.github.com/users/${USER}`)
        .then(res => {
            this.setState({data: res.data})
            console.log(res.data)
    }   )
    }

   render() {   


       return (
           <div className="App">
               <h1>Todo</h1>
               <TaskList tasks={this.state.tasks} t={this.state.t}/>
               <InputTask addTask={this.addTask} id={this.state.id} user= {this.state.user} addUser={this.addUser}/>
               <br/>
               <Github data={this.state.data}/>
           </div>
       );
   }
}

export default App;