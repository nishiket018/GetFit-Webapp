import React from 'react'

const Header = ({index,title,description}) => {
  return (
    <div className='headerContainer'>
      <div className='heading'>
        <p>{index}</p>
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default Header
