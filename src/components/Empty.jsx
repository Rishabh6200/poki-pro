import React from 'react'
import { Outlet } from 'react-router-dom'

const Empty = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Empty
