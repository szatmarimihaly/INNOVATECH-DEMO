// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar/Navbar';
import PageTitle from '@/components/PageTitle/PageTitle';

type Locale = (typeof routing.locales)[number];

export default async function Page({ params }: { params: { locale: Locale } }) {
  const { locale } = await Promise.resolve(params);
  const t = await getTranslations({ locale });

  return (
    <main>
      <Navbar />
      <PageTitle text={t('fitting')}/>
    </main>
  );
}
