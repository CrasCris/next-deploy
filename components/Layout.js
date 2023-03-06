import Navbar from "./Navbar"
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from 'nprogress'
import ClassNames from 'classnames'

const Layout = ({ children, title, footer = true, dark = false }) => {
    const router = useRouter();

    useEffect(() => {
        const handleRoutechange = url => {
            console.log(url)
            NProgress.start();
        }

        router.events.on('routeChangeStart', handleRoutechange)
        router.events.on('routeChangeCompleted', () => NProgress.done())
        return () => {
            router.events.off('routeChangeStart', handleRoutechange)
        }
    }, [])


    return (
        <>
            <div className={ClassNames({ 'bg-dark': dark, 'bg-secondary':!dark})}>
                <Navbar />

                <main className="container py-4">
                    {title &&(
                        <h1 className={ClassNames('text-center',{'text-light': dark})}>
                            {title}
                        </h1> 
                    )}

                    {children}
                </main>

                {
                    footer && (
                        <footer className="bg-dark text-light text-center">
                            <div className="container p-4">
                            <h1>&copy; Cristian Diaz Portafolio</h1>
                            <p>2023 - {new Date().getFullYear()}</p>
                            <p>All rights Reserverd</p>
                            </div>
    
                        </footer>
                    )
                    
                }

            </div>
        </>
    )
}

export default Layout;