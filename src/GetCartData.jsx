import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import ItemPage from "../App.js";
 
    function GetCartData(props) {
        const location = useLocation();
        let data = location.state;
        console.log(data);
        let { id } = useParams();
        return (
          <div>
            <Link to="/Products">Go Back</Link>
            <div className="productCard">
              <div>
                <ItemPage  
                  id={id}
                  title={data.title}
                  price={data.price}
                  description={data.description}
                  category={data.category}
                  image={data.image}
                  rate={data.rating.rate}
                  count={data.rating.count}
                ></ItemPage>
                <div>
                  <button
                    onClick={() => {
                      props.setCart(data);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }


export default GetCartData;