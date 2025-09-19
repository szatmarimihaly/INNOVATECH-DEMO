import React from 'react'
import LinkButton from '../Button/LinkButton'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'

type ProductItemProps = {
  id: number
  item_number: string
  slug: string
  image: string
}

type Props = {
  items: ProductItemProps[]
  typeSlug: string
  parentSlug: string
  locale: string
}

const ProductListItems = ({ items, parentSlug, typeSlug, locale }: Props) => {
  const productList = items ?? [] // Default üres tömb a hydration miatt

  return (
    <div className="w-full space-y-4 mt-10 max-w-5xl mx-auto px-4">
      {productList.length > 0 ? (
        productList.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border-2 rounded-lg shadow-xl"
          >
            <span className="text-xl font-bold">{item.item_number}</span>
            <LinkButton href={`/${locale}=${typeSlug}/${parentSlug}/${item.slug}`}>
              <ArrowForwardIosOutlinedIcon />
            </LinkButton>
          </div>
        ))
      ) : (
        <p>Nincs elérhető cikkszám ehhez az altípushoz.</p>
      )}
    </div>
  )
}

export default ProductListItems
