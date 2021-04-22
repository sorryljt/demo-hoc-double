import React, { forwardRef } from 'react'
import double from './double'

const CountView = (props: any, ref: any) => {
  const { count, bg, divClick} = props
  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        background: bg,
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={divClick}
      ref={ref}
    >
      {count}
    </div>
  )
}

export default double(forwardRef(CountView))