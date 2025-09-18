// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { routing } from '@/i18n/routing';

type Locale = (typeof routing.locales)[number];

export default async function Page({ params }: { params: { locale: Locale } }) {
  const { locale } = await Promise.resolve(params);
  const t = await getTranslations({ locale });

  return (
    <main>
      <h1>{t('activeLanguage')}</h1>
      <LanguageSwitcher />
    </main>
  );
}
