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
    let url="https://fakestoreapi.com/products";
    fetch(url)
        .then(res => res.json())
        .then((result) => {
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
            return(<div className='items'>
                <Link to={`/Items/${i.id}`}>{i.id}&middot;&nbsp;{i.title}</Link></div>)        
        });
    }   
    return  <div>        
       {dataToShow}       
        </div>;     
  }
}

