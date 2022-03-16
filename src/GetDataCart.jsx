import React from "react";
import ReactDOM from "react-dom";
import {Link, useParams} from 'react-router-dom';

 
export default class GetDataCart extends React.Component {

constructor(props) { 
    super(props);
     this.state={};
    this.load();    
  }

  load()
  {                                                                             
    console.log('Start Load');
    let url="https://fakestoreapi.com/products";
    fetch(url)
    .then(res => res.json())
    .then(
        (result) => {      
    console.log("OK");
    console.log(result);  
    this.setState({data:result});        
    },
        (error) => {
        alert(error);

        }
    )                                                                                                                                               
  }
  render() {  
    let dataToShow1=<div>Not Set Yet</div>;        
   
    
    if(this.state.data)
    {        
        dataToShow1 = this.props.data(
            (i)=>{
                let { image } = useParams();
                let { name } = useParams();
                let { desc } = useParams();
                let { price } = useParams();   
            return(
                <div><h1>{name}</h1>
                <p>Price: {price}</p>
                <p>About product: {desc}</p>
                <hr />
                <img src={image} width="200" height="200" alt=""/>
                </div>)
                });
    }
    
            /*
        dataToShow = this.state?.data?.map(
            (i)=>{
            return(<div>{i.title}</div>)
        });
    */            
    return  <div>        
        {dataToShow1}
        </div>;     
  }
}