import React from 'react'
import ProductCart from '../ProductCart/ProductCart';
import { Link } from 'react-router-dom';

const CategoryListItem = ({category,products}) => {
    console.log(category);
    console.log(products)
    return (
        <div>
            <h3>{category}</h3>
            {products.map((product)=> <ProductCart key= {product.productName}  {...product}/>)}
            <Link to={`/catogery-product/${category}`}>
            <button>Show All Products</button> 
            </Link>  <br/>
            -----------------------------------------------------------------------------------
        </div>
    )
}

export default CategoryListItem
