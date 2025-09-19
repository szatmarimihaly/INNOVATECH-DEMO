import { getTranslations } from 'next-intl/server'
import { supabase } from '@/lib/supabaseClient'
import PageTitleLong from '@/components/PageTitle/PageTitleLong'
import PartNumberSearch from '@/components/Search/PartNumberSearch'
import { Metadata } from 'next'
import ProductListItems from '@/components/Display/ProductListItems'

type Params = { params: { locale: string; subtype: string; partnumber: string } }

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

export default async function Page({ params } : Props) {
  const { locale, subtype, partnumber } = await Promise.resolve(params)
  const t = await getTranslations({ locale })
  const translatedPartnumber = t(partnumber)

  const { data: subtypeS, error: subtypeError } = await supabase
  .from('product_subtypes')
  .select('id')
  .eq('slug', partnumber)
  .single()

  if (subtypeError || !subtypeS) {
    console.error('Subtype nem található')
    return
  }

// 2️⃣ cikkszámok lekérése subtype.id alapján
  const { data: products, error: productsError } = await supabase
    .from('cikkszam_kereso')
    .select('id, item_number, slug, image')
    .eq('type_identifier', subtypeS?.id)

  return (
    <main>
      <PageTitleLong text={translatedPartnumber}/>
      <PartNumberSearch placeText={t('searchHolder')}/>
      <ProductListItems items={products ?? []} parentSlug={partnumber} typeSlug={subtype} locale={locale} />
    </main>
  )
}