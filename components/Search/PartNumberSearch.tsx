import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const PartNumberSearch = ({ placeText } : { placeText: string }) => {
  return (
    <div className='mt-10 flex justify-center px-2'>
        <div className='flex items-center justify-between bg-gray-200 max-w-2xl px-2 py-2 rounded-2xl w-full'>
            <input 
                type="text" 
                className='w-full outline-none' 
                placeholder={placeText}
            />
            <SearchOutlinedIcon />    
        </div>      
    </div>
  )
}

export default PartNumberSearch