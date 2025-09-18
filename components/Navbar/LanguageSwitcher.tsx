'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

export default function LanguageSwitcher() {
  const { locale } = useParams();
  const nextLocale = locale === 'en' ? 'hu' : 'en';

  return (
    <Link href={`/${nextLocale}`} prefetch className='no-underline hover:no-underline text-xl flex gap-2 items-center text-white bg-black px-4 py-2 rounded-lg'>
      {locale === 'en' ? 'EN' : 'HU'}
      <LanguageOutlinedIcon/>
    </Link>
  );
}
