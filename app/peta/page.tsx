import { Peta } from '@/components/layout/peta'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col gap-8 md:items-center md:w-screen">
      <div className="max-w-lg">
        <Peta />
      </div>

      <div className="space-y-2">
        <div className="flex gap-2 items-center">
          <Button size="icon" className='text-xs'>##</Button>
          <p className="text-sm">Kotak berisi soal</p>
        </div>
        <div className="flex gap-2 items-center">
          <Button variant="outline" size="icon" className='text-xs'>##</Button>
          <p className="text-sm">Kotak tidak berisi soal</p>
        </div>
      </div>
    </div>
  )
}

export default page