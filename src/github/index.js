
import React, {Component} from 'react'
import Axios from "axios";

class Github extends Component{
    state = {  data: ''}
    componentDidMount = () => this.fetchUser(this.props.user)

    fetchUser = (USER) => {
        Axios.get(`https://api.github.com/users/${USER}`)
        .then(res => {
            this.setState({data: res.data})
            console.log(res.data)
        })
    }

    render(){
        const {data} = this.state
        if (data)
        return (<div>{data.id}:{data.name} <img src = {data.avatar_url}
            alt = "avatar" width="50px"/></div>)
            return (<div>.</div>)
    }
}
export default Github