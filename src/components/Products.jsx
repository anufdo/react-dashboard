import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <p>Products</p>
      <Link className="text-blue-500 underline" to="/">
        Go to Dashboard
      </Link>
    </div>
  )
}

export default Products
