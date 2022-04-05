import React from 'react'

export const GifGridItem = ({id, title, url}) => {

  return (
    <div className='col-lg-4 col-md-6 p-4 animate__animated animate__fadeIn animate__delay-1s'>
      <div className='card'>
          <img src={ url } alt = { title}/>
          <p>{title}</p>
      </div>
    </div>
  )
}
