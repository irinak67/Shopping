import React from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
 
export default class GetData extends React.Component {

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
    let dataToShow=<div> </div>;        
    
    
    if(this.state.data)
    {        
        dataToShow = this.state.data.map(
            (i)=>{
            
            return(<div><ul>
                <li><Link to={`/Items/${i.id}`} >{i.id}&middot;&nbsp;{i.title}</Link></li></ul></div>)        
        });
    }
                /*
        dataToShow = this.state?.data?.map(
            (i)=>{
            return(<div>{i.title}</div>)
        });
    */            
    return  <div>        
       {dataToShow}       
        </div>;     
  }
}

