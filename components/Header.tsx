import Link from "next/link"

import { HamburgerMenuIcon, SearchIcon, SunIcon} from "@/utils/icons"
import { Logo } from "@/components"
import { FC, Fragment, useEffect, useState } from "react";
import { API, GetMenusQuery } from "@/api";
import { useRouter } from "next/router";

interface Menu {
    id: string
    title: string
    link: string
}

const Header: FC = () => {
    const [menus, setMenus] = useState<Menu[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [mobileMenuDropDownOpen, setMobileMenuDropDown] = useState<boolean>(false)
    const router = useRouter()

    async function getMenus() {
        const {data, loading} = await API.query<{ menus: Menu[] }>({query: GetMenusQuery})
        setMenus(data.menus)
        setLoading(loading)
    }

    useEffect(() => {
        getMenus().then()
    }, [])

    function renderMobileNav() {
        return(
            <header>
                <div className='relative flex max-w-xl justify-between px-4 py-4 mx-auto md:max-w-3xl sm:py-12'>
                    <div className='grid place-items-start flex-1 items-center'>
                        <div className="flex items-center">
                            <Logo className='relative flex-shrink-0 block w-10 h-10 sm:h-14 sm:w-14 md:w-20 md:h-20'/>
                            <h1 className='font-serif text-base tracking-widest ml-2 font-semibold tracking-wide text-center text-gray-700'>
                                SPYF
                            </h1>
                        </div>
                    </div>
                    <div className='flex items-center justify-end space-x-2'>
                        <div
                            className='flex items-center justify-center w-8 h-8 transition duration-300 ease-in-out bg-gray-200 rounded-md cursor-pointer group hover:bg-white'>
                            <SearchIcon className='w-4 h-4 text-gray-700'/>
                        </div>
                        <div
                            className='flex items-center justify-center w-8 h-8 transition duration-300 ease-in-out bg-gray-200 rounded-md cursor-pointer group hover:bg-white'>
                            <SunIcon className='w-4 h-4 text-gray-700'/>
                        </div>
                        <div>
                            <button
                                onClick={() => setMobileMenuDropDown(!mobileMenuDropDownOpen)}
                                className='flex items-center justify-center w-8 h-8 transition duration-300 ease-in-out bg-gray-200 rounded-md md:hidden group hover:bg-white'>
                                <HamburgerMenuIcon className='w-4 h-4 text-gray-700'/>
                            </button>
                        </div>
                    </div>
                </div>
                {mobileMenuDropDownOpen &&
                <div className='max-w-xl px-4 pb-6 mx-auto space-y-2'>
                    <Link href="/">
                        <a className="text-gray-500 py-2 px-2 bg-gray-50 block rounded-md hover:bg-white hover:text-gray-700">Home</a>
                    </Link>
                    <Link href={"/articles"}>
                        <a className="text-gray-500 py-2 px-2 bg-gray-50 block rounded-md hover:bg-white hover:text-gray-700">Articles</a>
                    </Link>
                    <Link href={"/about"}>
                        <a className="text-gray-500 py-2 px-2 bg-gray-50 block rounded-md hover:bg-white hover:text-gray-700">About</a>
                    </Link>
                    <Link href={"/contact"}>
                        <a className="text-gray-500 py-2 px-2 bg-gray-50 block rounded-md hover:bg-white hover:text-gray-700">Contact</a>
                    </Link>
                </div>
                }
            </header>
        )
    }

    function renderDesktopNav() {
        return(
            <Fragment>
                <header>
                    <div
                        className='grid max-w-xl grid-cols-3 px-4 py-8 mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-6xl xl:px-0 sm:py-12'>
                        <div className='flex items-center space-x-2'>
                            <div
                                className='flex items-center justify-center w-8 h-8 transition duration-300 ease-in-out bg-gray-200 rounded-md cursor-pointer group hover:bg-white'>
                                <SearchIcon className='w-4 h-4 text-gray-700'/>
                            </div>
                        </div>
                        <div className='grid place-items-center'>
                            <Logo className='relative block sm:h-12 sm:w-12 md:w-16 md:h-16 lg:w-20 lg:h-20'/>
                            <h1 className='hidden font-serif font-semibold tracking-wide text-center text-gray-700 sm:mt-2 md:block sm:text-sm md:text-base'>
                                Sikkim Progressive Youth Forum
                            </h1>

                            <h1 className='font-serif font-semibold tracking-widest text-center text-gray-700 sm:mt-2 md:hidden sm:text-sm md:text-base'>
                                S P Y F
                            </h1>
                        </div>
                        <div className='flex items-center justify-end space-x-2'>
                            <div
                                className='flex items-center justify-center w-8 h-8 transition duration-300 ease-in-out bg-gray-200 rounded-md cursor-pointer group hover:bg-white'>
                                <SunIcon className='w-4 h-4 text-gray-700'/>
                            </div>
                        </div>
                    </div>
                </header>
                <nav className='max-w-full px-4 mx-auto sm:block md:max-w-3xl lg:max-w-5xl xl:max-w-6xl md:px-0'>
                    <ul className='flex items-center justify-center space-x-6 text-sm text-gray-700 border-b border-gray-200 pb-3'>
                        {!loading && menus.map((menu) => (
                            <li key={menu.id}>
                                <Link href={menu.link}>
                                    <a className={`py-2 inline-block hover:bg-white rounded-md px-4 hover:text-gray-800 ${router.pathname === menu.link ? 'bg-white' : ''}`}>{menu.title}</a>
                                </Link>
                            </li>
                        ))}
                        {loading && (
                            <Fragment>
                                <li className="py-3.5 animate-pulse">
                                    <span className="bg-gray-200 w-20 block">&nbsp;</span>
                                </li>
                                <li className="py-3.5 animate-pulse">
                                    <span className="bg-gray-200 w-20 block">&nbsp;</span>
                                </li>
                                <li className="py-3.5 animate-pulse">
                                    <span className="bg-gray-200 w-20 block">&nbsp;</span>
                                </li>
                                <li className="py-3.5 animate-pulse">
                                    <span className="bg-gray-200 w-20 block">&nbsp;</span>
                                </li>
                            </Fragment>
                        )}
                    </ul>
                </nav>
            </Fragment>
        )
    }

    return (
        <>
            {/*Desktop Navigation*/}
            <div className="hidden sm:block">
                {renderDesktopNav()}
            </div>

            {/*Mobile Navigation*/}
            <div className="sm:hidden sticky top-0 bg-gray-100 shadow-lg z-20">
                {renderMobileNav()}
            </div>
        </>
    )
}

export { Header }
