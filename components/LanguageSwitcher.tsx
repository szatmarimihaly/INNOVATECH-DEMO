'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function LanguageSwitcher() {
  const { locale } = useParams();
  const nextLocale = locale === 'en' ? 'hu' : 'en';

  return (
    <Link href={`/${nextLocale}`} prefetch>
      {locale === 'en' ? 'Switch to Hungarian' : 'Váltás angolra'}
    </Link>
  );
}
