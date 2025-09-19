import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import PageTitleLong from '@/components/PageTitle/PageTitleLong'

type Params = {params : {locale: string, subtype: string, partnumber: string}}

export async function generateMetadata({params} : Params): Promise<Metadata>{
  const { locale, subtype, partnumber } = await Promise.resolve(params)
  const t = await getTranslations({ locale })
  const translatedPartnumber = t(partnumber)

  return {
    title: `${translatedPartnumber}.toUpperCase()`,
    description: `Details about ${translatedPartnumber}`
  }
}

type Props = {params : { locale: string, subtype: string, partnumber: string }}

const Page = async({ params } : Props) => {
  const { locale, subtype, partnumber } = await Promise.resolve(params)
  const t = await getTranslations({ locale })
  const translatedPartnumber = t(partnumber)

  

  return (
    <PageTitleLong text={translatedPartnumber}/>
  )
}

export default Page