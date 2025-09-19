import { getTranslations } from 'next-intl/server'
import { supabase } from '@/lib/supabaseClient'
import PageTitle from '@/components/PageTitle/PageTitle'
import { Metadata } from 'next'
import ProductList2 from '@/components/Display/ProductList2'

type Params = { params: { locale: string; subtype: string } }

// generateMetadata async, fordító itt
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, subtype } = await Promise.resolve(params)
  const t = await getTranslations({ locale }) // ✅ await!
  const translatedSubname = t(subtype)

  return {
    title: translatedSubname.toUpperCase(),
    description: `All about ${translatedSubname}`,
  }
}

// Page async komponens
type Props = { params: { locale: string; subtype: string } }

export default async function Page({ params }: Props) {
  const { locale, subtype } = await Promise.resolve(params)

  const t = await getTranslations({ locale }) // ✅ itt is await!
  const translatedSubname = t(subtype)

  // 1️⃣ Lekérdezzük a fő termék típust a slug alapján
  const { data: productType, error: typeError } = await supabase
    .from('product_types')
    .select('id, name, slug')
    .eq('slug', subtype)
    .single()

  if (typeError || !productType) return <p>Termék típus nem található</p>

  // 2️⃣ Lekérdezzük az adott type_id-hoz tartozó subtypes-okat
  const { data: subtypes, error: subError } = await supabase
    .from('product_subtypes')
    .select('id, name, slug')
    .eq('type_id', productType.id)

  if (subError) return <p>Hiba történt az alkategóriák lekérésekor</p>

  // 3️⃣ Fordítás hozzáadása minden subtype-hoz
  const translatedSubtypes = subtypes?.map(s => ({
    ...s,
    translatedName: t(s.name)
  })) ?? []

  return (
    <main>
      <PageTitle text={translatedSubname}/>
      <ProductList2 types={translatedSubtypes} parentSlug={productType.slug} locale={locale} />
    </main>
  )
}
