import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <div className="container py-6 flex sticky top-0 justify-between backdrop-blur-md">
      <Link href="/">
        <h2 className='font-semibold'>An-Naafi</h2>
      </Link>
    </div>
  )
}
