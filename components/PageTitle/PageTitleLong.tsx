import React from 'react'


const PageTitleLong = ({ text } : { text:string }) => {

  return (
    <h1 className='text-3xl font-bold mt-10 text-center px-4'>
        {text}
    </h1>
  )
}

export default PageTitleLong