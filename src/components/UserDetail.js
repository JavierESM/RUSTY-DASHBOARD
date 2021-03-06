import React, {Component} from "react"

class UserDetail extends Component {
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
    
    this.apiCall("http://localhost:3001/api/users/detail", this.mostrarListado)
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
        
    <p>Último usuario: {usuarios.full_name}</p>
    )
    }
}
export default UserDetail