import React, {Component} from "react"

class ProductList extends Component {
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
    
    this.apiCall("http://localhost:3001/api/products", this.mostrarListado)
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
        
    <p>Total de productos: {usuarios}</p>
    )
    }
}
export default ProductList