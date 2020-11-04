import React from 'react'

export default function Products({products}) {
  console.log(products)
  return (
    <div>
       {products ? products.map((p) => <li>{p.name}</li>) : null}
    </div>
  )
}
