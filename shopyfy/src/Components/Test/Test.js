import React, { useState } from "react";
import { connect } from 'react-redux';
import { uploadProduct } from './../../Redux/product/productAction';

const Test = ({uploadProduct}) => {
  var [productName, setProductName] = useState("");
  var [category, setCategory] = useState("");
  var [quantity, setQuantity] = useState('');
  var [coverImage, setCoverImage] = useState(null);
  var [description, setDescription] = useState("");
  var [cost, setCost] = useState('');

  var handleForm = (e) => {
    e.preventDefault();
    var productObj = {
      productName,
      category,
      quantity,
      coverImage,
      description,
      cost,
    };

    uploadProduct(productObj);
  };

  return (
    <div>
      <h1>Test</h1>

      <form onSubmit={handleForm}>
        <input
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
          type="text"
          placeholder="Product Name"
        />{" "}
        <br />
        <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          type="text"
          placeholder="Category"
        />{" "}
        <br />
        <input
          onChange={(e) => setCost(e.target.value)}
          value={cost}
          type="text"
          placeholder="Cost"
        />{" "}
        <br />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          cols="30"
          rows="10"
          placeholder="description"
        ></textarea>{" "}
        <br />
        <span>Choose Product image</span>{" "}
        <input
          onChange={(e) => setCoverImage(e.target.files[0])}
          type="file"
          placeholder="Cover Image"
        />{" "}
        <br />
        <input
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
          type="text"
          placeholder="Quantity"
        />{" "}
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

var actions = {
    uploadProduct
}

export default connect(null,actions)(Test);
