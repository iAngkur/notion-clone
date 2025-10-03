import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

export default function MarketingLayout() {
    return (
        <div className='min-h-screen dark:bg-[#1f1f1f] w-full flex flex-col'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}
