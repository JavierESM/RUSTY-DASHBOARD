import React, {Component} from "react"

class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users : []
        }
    }    
    apiCall(url, consecuencia){
        fetch(url) 
        .then(respuesta => respuesta.json())
        .then(data => consecuencia(data))
 
        .catch(error => console.log(error))
    }
    componentDidMount () {
    
    this.apiCall("http://localhost:3001/api/users", this.mostrarListado)
    }
    mostrarListado = (data) => {
        console.log(data)
        this.setState({
            users : data.data
        })
    }
    render (){
    
    let usuarios = this.state.users
    console.log(usuarios)
    return (
    <div>
    <p>Total de usuarios: <br></br></p>
    <p>{usuarios}</p>
    </div>
    )
    }
    
    
}

export default UserList