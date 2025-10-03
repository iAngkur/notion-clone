import logo from '../../../assets/logo.svg'
import logoDark from '../../../assets/logo-dark.svg'

export default function Logo() {
    return (
        <div className='hidden md:flex items-center justify-center'>
            <img
                src={logo}
                alt='Logo'
                height={40}
                width={40}
                className='dark:hidden'
            />
            <img
                src={logoDark}
                alt='Logo'
                height={40}
                width={40}
                className='hidden dark:block'
            />
            <p className="font-semibold">Notion</p>
        </div>
    )
}
