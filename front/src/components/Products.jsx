import React from 'react'

export default function Products({products}) {
  return (
    <div>
       {products ? products.map((p) => <li key={p.id} >{p.name}</li>) : null}
    </div>
  )
}
