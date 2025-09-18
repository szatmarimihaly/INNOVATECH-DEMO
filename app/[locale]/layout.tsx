import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import type { ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import '../globals.css'

const poppins  = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

type Locale = (typeof routing.locales)[number];

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = await Promise.resolve(params);

  // Ellenőrizzük, hogy tényleg támogatott nyelv
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} className={poppins.className}>
      <body>
        <NextIntlClientProvider locale={locale as Locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
