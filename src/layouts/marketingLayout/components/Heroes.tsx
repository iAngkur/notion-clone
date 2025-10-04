
import documentImg from '../../../assets/documents.png'
import documentDarkImg from '../../../assets/documents-dark.png'
import readingImg from '../../../assets/reading.png'
import readingDarkImg from '../../../assets/reading-dark.png'

export default function Heroes() {
    return (
        <div className='flex items-center justify-between gap-10 max-w-3xl'>
            <div className='w-[300px] h-[300px]'>
                <img className='object-contain dark:hidden' src={documentImg} alt='Documents' />
                <img className='object-contain hidden dark:block' src={documentDarkImg} alt='Documents' />
            </div>
            <div className='w-[300px] h-[300px] hidden md:block'>
                <img className='object-contain dark:hidden' src={readingImg} alt='Reading' />
                <img className='object-contain hidden dark:block' src={readingDarkImg} alt='Reading' />
            </div>
        </div>
    )
}
