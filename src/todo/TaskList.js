import React,{Component} from 'react'

class TaskList extends Component {
   render() {
       if ( this.props.tasks && this.props.t )
           return (<ol > {
                   this.props.tasks.map((item) => (
                       <li key={item.id}> {item.task} </li>
                   ))
                   
               }
               
               {this.props.t.map((item2) => (
                       <li key={item2.id}> {item2.where} </li>
                   ))
                   
               }
           </ol>)
   }
}

export default TaskList