import React, { Children } from 'react'

function TextError(props) {
  return (
    <div className='error'>
        {props.children}
    </div>
    
  )
}

export default TextError