import React from 'react'

const ProductCart = ({productName,cost}) => {

    return (

        <div>
            <h1>{productName}  -  {`$ ${cost}`}  -  <button>Add to kart</button></h1>
        </div>
    )
}

export default ProductCart
