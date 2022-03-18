import './App.css';
import './style.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import GetData from './GetData';
import itemData from './ItemData';

const HomePage = () => {
  return(<div className='home'>
          <h1>SHOPPING MALL</h1>
          <div></div>
      </div>
  )
}

const ItemsPage = () => {
  return (
      <div className='items'>
          <h1><p id="title">List of products:</p></h1>
          <hr/>
          <GetData/>
      <div id="link">
      <Link to="/Home">Go Back</Link>
      </div> 
      </div>
  )
} 

let myCart = [];
const ItemPage = () => {  
  let [name, setName] = useState();
  let [data, setData] = useState(); 
  let [desc, setDesc] = useState();
  let [price, setPrice] = useState();
  let [image, setImage] = useState();
  let [myCart, setCart] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    itemData(id).then((res) => {
      let data = res;
      console.log("data, ", data);
      setName(data.title);
      setDesc(data.description);
      setPrice(data.price);
      setImage(data.image);
      setData(data);
    });
  }, []);
  // console.log(id);
  // console.log(desc, price);
  return (
    <div>
    <div className='item'>
      <h3>{name}</h3>      
      <div>
        <img className='image' src={image} alt=""/>
      </div>      
      <div id="text"><b>Description:</b>{desc}</div>
      <br/>
      <div id="text"><b>Price:{price} $</b></div>       
      <br/>
      </div>      
      <button id="btn"
          onClick={() => {
          myCart.push(data);          
          // setCart([...myCart,data])        
          console.log(myCart);
          <CartPage cart={myCart}/>
        }}> 
      </button>
      <div id="link">
      <Link to="/Items">Go Back</Link>
      </div> 
      <br/><br/>
    </div>
  );
}

const CartPage = (props) => { 
  // const [myCart, setMyCart] = useState([])
  return (
    <div className='cart'>     
      <div id="title"><h1>My cart</h1></div>
      <div className="product">
        {
          console.log(props.cart)
          // (myCart.map = (item) => {
          //   `<div>${item.title}</div>``<div>${item.price}</div>``<div>${item.description}</div>``<div><img src=${item.image} /></div>`;
          // })
        }
      </div>
    </div>
  );
};
    
function App() { 
  
    return (
    <div className="App">      
     <BrowserRouter>
        <Link className="link" to="/Home">Home</Link>***        
        <Link className="link" to="/Items">Catalog of products</Link>***
        <Link className="link" to="/Cart">See our items</Link>***
        <hr/>          
             <Routes>               
                     <Route path="/" element={<HomePage/>}/>
                     <Route path="/Home" element={<HomePage/>}/>
                     <Route path="/Items" element={<ItemsPage/>}/>                     
                     <Route path="/Items/:id" element={<ItemPage/>}/>
                     <Route path="/Cart" element={<CartPage myCart={myCart}/>}/>                                   
             </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;