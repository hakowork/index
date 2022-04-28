import Head from 'next/head';
import React from 'react';
import BannerSecond from './banner_second';
import Banner from './banner'
import Link from 'next/link';
import { useEffect, useState } from "react"

export default function Layout({ children, home, title}: { children: React.ReactNode, home?: boolean, title?: string}) {
    const [headerDown, setHeaderDown] = useState(false);
    const [headerOpen, setHeaderOpen] = useState(false);

    function openHeader() {
        if (headerOpen) {
            setHeaderOpen(false);
        } else setHeaderOpen(true);
    }

    function getYear() {
        const time_right_now = Date.now();
        const current_date = new Date(time_right_now);
        const year_right_now = current_date.getFullYear();

        return year_right_now;
    }

    useEffect(() => {
        function checkScroll() {
            if (window.scrollY > 20) {
                setHeaderDown(true);
            } else setHeaderDown(false);
        }

        const listener = () => {
            checkScroll();
        };

        checkScroll();
        window.addEventListener("scroll", listener);
        
        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

    const menuItems = [
        { title: "home", url: "/" },
        { title: "game", url: "/game" },
        { title: "work", url: "/work" },
        { title: "contact", url: "/contact" }
    ]
    
    return (
        <div id="app" className="font-main bg-neutral-900 text-neutral-100">
            <Head>
                {title
                    ? <title>{title} - hakowork</title>
                    : <title>hakowork</title>
                }
                
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={`fixed w-full px-6 sm:px-0 z-50 header-section duration-200 drop-shadow ${(headerDown || headerOpen) ? "bg-neutral-900" : "pt-2 md:pt-4" }`}>
                <nav className="flex items-center justify-between flex-wrap py-4 z-10 top-0 sm:container sm:mx-auto">
                <div className="flex items-center flex-shrink-0">
                    <Link href="/">
                        <a className="no-underline">
                            <span><img className="inline h-12" src="/logo.png" /></span>
                        </a>
                    </Link>
                </div>

                <div className="block lg:hidden">
                    <button id="nav-toggle" onClick={openHeader} className="flex items-center py-2 text-neutral-100 border-neutral-100 hover:text-white hover:border-white">
                        <div className={`${headerOpen ? "relative h-[14px] w-[36px]" : ""}`}>
                            <span className={`${headerOpen ? "absolute right-0 top-1 rotate-45" : "block"} w-10 h-[3px] bg-neutral-100 duration-150`}></span>
                            <span className={`${headerOpen ? "absolute right-0 top-1 -rotate-45" : "block mt-2"} w-10 h-[3px] bg-neutral-100 duration-150`}></span>
                            <span className={`${headerOpen ? "absolute hidden" : "block mt-2"} w-6 h-[3px] bg-neutral-100 duration-150`}></span>
                        </div>
                    </button>
                </div>

                <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${!headerOpen && "hidden"} pt-2 lg:pt-0`} id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                    {menuItems?.map((item) => (
                        <li className="group lg:mr-3 last:lg:mr-0" key={item?.title}>
                        <Link href={item?.url}>
                            <a className={`block uppercase font-mont lg:inline-block text-right lg:text-left no-underline py-2 px-4 pr-0 lg:pr-4 group-last:pr-0 text-gray-50`}>
                            {item?.title}
                            </a>
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                </nav>
            </header>

            {home
            ? <Banner/>
            : <BannerSecond title={title}/>
            }
            
            <main>{children}</main>

            <footer className="grid grid-cols-2 py-6 sm:container font-mont sm:mx-auto px-6 sm:px-0">
                <div>
                    &copy; { getYear() } hakowork
                </div>
                <div className="text-right">
                powered by&nbsp;
                <a href="https://ba-ka.org/" target="_blank" rel="noopener noreferrer">
                    ba-ka
                </a>
                </div>
            </footer>
        </div>
    )
}