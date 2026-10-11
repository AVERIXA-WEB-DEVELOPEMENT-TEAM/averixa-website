import { useEffect } from 'react'
import { Outlet,useLocation} from 'react-router'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
    const {pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) {
            document.getElementById(hash.slice(1))?.scrollIntoView()
        } else  {
            window.scrollTo(0,0)
        }
    }, [pathname,hash])

    return(
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className = "flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
    }
