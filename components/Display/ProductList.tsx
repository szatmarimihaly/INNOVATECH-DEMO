import React from 'react'
import LinkButton from '../Button/LinkButton'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'

type ProductListProps = {
    id: number, 
    translatedName: string,
    slug: string
}

type Props = {
    types: ProductListProps[],
    locale: string
}

const ProductList = ({ types, locale } : Props) => {
  return (
    <div className='w-full space-y-4 mt-10 max-w-5xl mx-auto px-4'>
        {types.map((type) => (
            <div
                key={type.id}
                className='flex items-center justify-between p-4 border-2 rounded-lg shadow-xl'
            >
                <span className='text-xl font-bold'>{type.translatedName}</span>
                <LinkButton href={`/${locale}/${type.slug}`}>
                    <ArrowForwardIosOutlinedIcon/>
                </LinkButton>
            </div>
        ))}
    </div>        
  )
}

export default ProductList