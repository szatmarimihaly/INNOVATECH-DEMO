// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/Navbar/Navbar'
import PageTitle from '@/components/PageTitle/PageTitle'
import { supabase } from '../../lib/supabaseClient'
import ProductList from '@/components/Display/ProductList'
import { Metadata } from 'next'

export const metadata : Metadata = {
  title: 'InterApp',
  description: 'NEXTJS'
}

type Locale = (typeof routing.locales)[number];

export default async function Page({ params }: { params: { locale: Locale } }) {
  const { locale } = await Promise.resolve(params);
  const t = await getTranslations({ locale });

  const { data: productTypes, error } = await supabase
    .from("product_types")
    .select("id, name, slug")

  if (error) return <p>Hiba: {error.message}</p>;

  const typesWithTranslations = productTypes?.map(pt => ({
    ...pt,
    translatedName: t(pt.name) // itt fordítjuk
  }))

  return (
    <main>
      <Navbar />
      <PageTitle text={t('products')}/>
      <ProductList types={typesWithTranslations ?? []} locale={locale}/>
    </main>
  );
}
