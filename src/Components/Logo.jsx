import React from 'react'

function Logo({ width = '100px', height = 'auto', className = '', alt = 'App logo' }) {
  const imgStyles = {
    width,
    height,
    objectFit: 'contain',
    display: 'block'
  }

  return (
    <div className={className} aria-hidden={alt ? 'false' : 'true'}>
      <img
        className='rounded-2xl'
        src="src\assets\LOGO.jpg"
        alt={alt}
        style={imgStyles}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

export default Logo