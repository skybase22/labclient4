
import React, {Component} from 'react'
import Axios from "axios";

class Github extends Component{
    // state = {  data: ''}
    // componentDidMount = () => this.fetchUser(this.props.user)

    // fetchUser = (USER) => {
    //     Axios.get(`https://api.github.com/users/${USER}`)
    //     .then(res => {
    //         this.setState({data: res.data})
    //         console.log(res.data)
    //     })
    // }

    render(){
        
        //const {data} = this.state
        if (this.props.data)
        return (<div>{this.props.data.id}:{this.props.data.name} <img src = {this.props.data.avatar_url}
            alt = "avatar" width="50px"/></div>)
            return (<div>.</div>)
    }
}
export default Github