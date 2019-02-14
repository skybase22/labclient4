import React, {Component} from 'react'

class InputTask extends Component {
    state = {task:'',where:'',user:''}

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    render() {
        return (
            <div>
                <input type = "hidden" name = "id" value = {this.props.id} /> <br/>
                <input type = "text" name = "task" onChange = {this.handleChange} /> <br/>
                <input type = "text" name = "where" onChange = {this.handleChange} /> <br/>
                <input type = "text" name = "user" onChange = {this.handleChange} /> <br/>
                <button onClick = { () => this.props.addTask(this.state.task,this.state.where)} > Add</button>
                <button onClick = { () => this.props.addUser(this.state.user)} > Adduser</button>
            </div>
        )
    }
}
export default InputTask