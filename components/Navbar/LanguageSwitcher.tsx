'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

export default function LanguageSwitcher() {
  const { locale } = useParams();
  const nextLocale = locale === 'en' ? 'hu' : 'en';

  return (
    <Link href={`/${nextLocale}`} prefetch className='text-current no-underline hover:no-underline text-xl m-4 flex gap-2 items-center'>
      {locale === 'en' ? 'EN' : 'HU'}
      <LanguageOutlinedIcon/>
    </Link>
  );
}
