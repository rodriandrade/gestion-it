import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios'

function App() {

  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')

  useEffect(() => {
    const getProducts = async () =>{
      const products = await axios.get('')
      //setProducts(products)
    }
    getProducts();
  }, [])

  useEffect(() => {
    const getSales = async () =>{
      const sales = await axios.get('')
      //setSales(sales)
    }
    getSales();
  }, [])

  const createProduct = () =>{
    const productData = {
      'product_name': productName,
      'product_price': productPrice
    }
    axios({
      method: 'post',
      url: '',
      data: productData
    });
  }

  return (
    <div className="App">
      <button>Ventas</button>
      <button>Productos</button>
      <button>Resumen</button>
      <input type="text" placeholder="Nombre del producto" onChange={e => setProductName(e.target.value)}/>
      <input type="number" placeholder="Precio del producto" onChange={e => setProductPrice(e.target.value)}/>
      <input type="submit" value="Crear producto" onClick={createProduct}/>

      {products && <h3>Products</h3>}
      {products && products.map(product => <p>{product}</p>)}

      {sales && <h3>Sales</h3>}
      {sales && sales.map(sale => <p>{sale}</p>)}
    </div>
  );
}

export default App;
