import React, {Component} from "react"

class User extends Component {

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
    
    this.apiCall("http://localhost:3001/api/users/list", this.mostrarListado)
    }
    mostrarListado = (data) => {
        console.log(data.data)
        this.setState({
            users : data.data.users
        })
    }
    render (){
        const {users = []} = this.state
        console.log(users)
        let contenido = users.map( (user, i) =>
        <li>{user.full_name}</li>
        )
    return (
    
    
    <ul style={{listStyle: "none", padding: 0}} className="ul">Total de usuarios: 
        <li style={{padding: 0}}>{contenido}</li>
    </ul>
    )
    
    }
    
}

export default User