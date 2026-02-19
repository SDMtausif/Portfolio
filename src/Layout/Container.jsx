import React, { Children } from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[1160px] w-"100%" mx-auto'>{children}</div>
  )
}

export default Container