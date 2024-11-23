import React from 'react'

const SectionWrapper = ({children,header,title}) => {
  return (
    <section className='sectionContainer'>
      <div className="sectionContent">
        <p>{header}</p>
        <h2>{title[0]} <span>{title[1]}</span>  {title[2]}</h2>
      </div>
      {children}
    </section>
  )
}

export default SectionWrapper
