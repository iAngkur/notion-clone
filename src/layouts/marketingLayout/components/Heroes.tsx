import React from 'react'

import documentImg from '../../../assets/documents.png'
import readingImg from '../../../assets/reading.png'

export default function Heroes() {
    return (
        <div className='flex items-center justify-between gap-10 max-w-3xl'>
            <div className='w-[300px] h-[300px]'>
                <img className='object-contain' src={documentImg} alt='Documents' />
            </div>
            <div className='w-[300px] h-[300px] hidden md:block'>
                <img className='object-contain' src={readingImg} alt='Reading' />
            </div>
        </div>
    )
}
