import React from 'react'


const PageTitle = ({ text } : { text:string }) => {

  return (
    <h1 className='text-5xl font-bold mt-10 text-center'>
        {text}
    </h1>
  )
}

export default PageTitle