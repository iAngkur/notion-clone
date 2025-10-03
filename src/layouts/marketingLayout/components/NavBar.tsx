import useScrollTop from '@/hooks/useScrollTop'
import { cn } from '@/lib/utils';
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Button } from '@/components/ui/button';

export default function NavBar() {
    const scrolled = useScrollTop();

    return (
        <header className={cn('fixed z-50 top-0 left-0 right-0 w-full bg-background dark:bg-[#1f1f1f] px-6 py-2', scrolled && "border-b-1 shadow-sm",)}>
            <nav className='flex items-center max-w-7xl mx-auto'>
                <Link to="/" replace>
                    <Logo />
                </Link>
                <div className='md:ml-auto flex items-center gap-6'>
                    <ModeToggle />
                    <Button asChild variant="ghost">
                        <NavLink to="/login" className="font-semibold">Login</NavLink>
                    </Button>
                </div>
            </nav>
        </header >
    )
}
