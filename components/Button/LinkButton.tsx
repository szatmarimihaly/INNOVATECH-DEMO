import React from 'react'
import Link from 'next/link'

type LinkButtonProps = {
    href: string;
    children: React.ReactNode;
}

const LinkButton = ({ href, children } : LinkButtonProps) => {
  return (
    <Link
        href={href}
        className=''
    >
        {children}
    </Link>
  )
}

export default LinkButton