import React from "react";

function itemData(id) {
  return fetch(`https://fakestoreapi.com/products/${id}`)
  .then((res) => {
    return res.json();
  });
}

export default itemData;