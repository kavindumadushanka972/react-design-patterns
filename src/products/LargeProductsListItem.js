import React from 'react'

export const LargeProductsListItem = ({product}) => {

  const {name, price, decsription, rating} = product

  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{decsription}</p>
      <p>Average Rating: {rating}</p>
    </>
  )
}
