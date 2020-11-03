import React from 'react'

export default function Products(props) {
  console.log('props',products)
  return (
    <div>
       {products ? products.map((p) => <li>{p.name}</li>) : null}
    </div>
  )
}
