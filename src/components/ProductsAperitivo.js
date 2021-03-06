import React, {Component} from "react"

class ProductsAperitivo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products : []
        }
    }    
    apiCall(url, consecuencia){
        fetch(url) 
        .then(respuesta => respuesta.json())
        .then(data => consecuencia(data))
 
        .catch(error => console.log(error))
    }
    componentDidMount () {
    
    this.apiCall("http://localhost:3001/api/products/list/aperitivo", this.mostrarListado)
    }
    mostrarListado = (data) => {
        console.log(data.data)
        this.setState({
            products : data.data.products
        })
    }
    render (){
        const {products = []} = this.state
        console.log(products)
        let contenido =    products.map( (product, i) =>
        <li>{product.drink}</li>
    )

    return (
    
 
    <ul style={{listStyle: "none", padding: 0, marginTop: "1%", marginBottom: "1%"}}>Aperitivos: 
        {contenido}
    </ul>
    )
    }
    
}

export default ProductsAperitivo