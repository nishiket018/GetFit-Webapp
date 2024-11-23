import React from 'react'

const Button = ({children,handleScrollDown,onClick}) => {
  return (
    <button className='buttonUI' onClick={handleScrollDown || onClick}>
      {children}
    </button>
  )
}

export default Button
