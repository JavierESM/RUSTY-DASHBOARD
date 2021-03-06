import logo from './logo.svg';
import './App.css';
import UserList from "./components/UserList"
import User from "./components/User"
import ProductList from "./components/ProductList"
import ProductsDulce from "./components/ProductsDulce"
import ProductsCitrico from "./components/ProductsCitrico"
import ProductsAperitivo from "./components/ProductsAperitivo"
import ProductDetail from "./components/ProductDetail"
import UserDetail from "./components/UserDetail"
function App() {
  return (
    <div className="App">
        
        <div className="cont">
        
        <UserList/>
       
        </div>   

        <div className="cont">
          <div className="ul">
        <User/>
        </div>
        </div>   
        <div className="cont">
        <UserDetail/>
        </div>   
        <div className="cont">
        <ProductList/>
        </div>   
        <div className="cont">
        <ProductsDulce/>
        </div>   
       <div className="cont">
        <ProductsAperitivo/>
</div>   
<div className="cont">
        <ProductsCitrico/>
</div>   
<div className="cont">
        <ProductDetail/>

    </div>    
    </div>
  );
}

export default App;
