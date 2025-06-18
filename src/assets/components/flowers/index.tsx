import React from 'react'
import Categores from '../flowers/categores/index'
import Products from '../flowers/products/index'
const flowers:React.FC = () => {
  return (
    <div className="grid grid-cols-[1fr_3fr] gap-5">
      <Categores/>
      <Products/>
    </div>
  )
}

export default flowers