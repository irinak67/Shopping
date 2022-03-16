import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import GetData from './GetData';
import itemData from './ItemData';

const HomePage = () => {
  return(<div>
          <h1>Department store</h1>
          <div></div>
      </div>
  )
}

const ItemsPage = () => {
  return (
      <div>
          <h1>List of products:</h1>
          <hr/>
          <GetData/>
      </div>
  )
} 

let myCart = [];
const ItemPage = () => {  
  let [name, setName] = useState();
  let [data, setData] = useState(); 
  let [desc, setDesc ] = useState();
  let [ price, setPrice ] = useState();
  let [ image, setImage ] = useState();
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
  console.log(id);
  console.log(desc, price);
  return (
    <div>
      <h1>{name}</h1>      
      <div>{desc}</div>
      <div><b>Price:{price} $</b></div> 
      <div>
        <img src={image} alt=""  />
      </div>
      <button
        onClick={() => {
          myCart.push(data);
          console.log(myCart);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

const CartPage = () => { 
  return (
    <div>     
      <div><h1>My cart</h1></div>
      <div className="product">
        {
          (myCart.map = (item) => {
            `<div>${item.title}</div>``<div>${item.price}</div>``<div>${item.description}</div>``<div>${item.category}</div>``<div><img src=${item.image} /></div>`;
          })
        }
      </div>
    </div>
  );
};
// const ItemPage = () => {
//   let { id } = useParams();
//   let { title } = useParams();
//   let { desc } = useParams(desc);
//   let { price } = useParams();
//   return(
//     <div className='123'>
//       <h1>I am here</h1>
//       {console.log({title, id, desc})}
    
//     </div>
//   )
// }

// const CartPage = () => {
//   return (
//       <div>
//           <h1>Your choice :</h1>
//           <hr/>
          
//           <div></div>
//       </div>
//   )
// } 

  function App() {
    return (
    <div className="App">      
     <BrowserRouter>
        <Link to="/Home">Home</Link>***        
        <Link to="/Items">Catalog of products</Link>***
        <Link to="/Cart">See our items</Link>***
        <hr/>          
             <Routes>               
                     <Route path="/" element={<HomePage/>}/>
                     <Route path="/Home" element={<HomePage/>}/>
                     <Route path="/Items" element={<ItemsPage/>}/>                     
                     <Route path="/Items/:id" element={<ItemPage/>}/>
                     <Route path="/Cart" element={<CartPage/>}/>                                   
             </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;