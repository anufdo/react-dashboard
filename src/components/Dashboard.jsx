import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <p>Dashboard</p>
      <Link className="text-blue-500 underline" to="/products">
        Go to Products
      </Link>
    </div>
  )
}

export default Dashboard
