import React from 'react'
import '../styles/mainName.css'

export default function MainName({children}) {
  return (
    <div className='main-name-container'>
      <div className='main-name'>{children}</div>
    </div>
  )
}
