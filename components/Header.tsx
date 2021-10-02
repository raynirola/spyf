import Link from "next/link"

import { FacebookIcon, HamburgerMenuIcon, InstagramIcon, SearchIcon, SunIcon, TwitterIcon } from "@/utils/icons"
import { Logo } from "@/components"
import { FC, useEffect, useState } from "react";
import { API, GetMenusQuery } from "@/api";

interface Menu {
    id: string
    title: string
    link: string
}

const Header: FC = () => {
    const [menus, setMenus] = useState<Menu[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    async function getMenus() {
        const {data, loading} = await API.query<{ menus: Menu[] }>({query: GetMenusQuery})
        setMenus(data.menus)
        setLoading(loading)
    }

    useEffect(() => {
        getMenus().then()
    }, [])

    return (
        <>
            <header>
                <div
                    className='grid max-w-xl grid-cols-3 px-4 py-8 mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-6xl md:px-0 sm:py-12'>
                    <div className='flex items-center space-x-2'>
                        <div
                            className='flex items-center justify-center w-6 h-6 transition duration-300 ease-in-out bg-gray-200 rounded-md cursor-pointer group hover:bg-white'>
                            <FacebookIcon className='w-4 h-4 text-gray-700 group-hover:text-[#1877F2]'/>
                        </div>
                        <div
                            className='flex items-center justify-center w-6 h-6 transition duration-300 ease-in-out bg-gray-200 rounded-md cursor-pointer group hover:bg-white'>
                            <TwitterIcon className='w-4 h-4 text-gray-700 group-hover:text-[#1DA1F2]'/>
                        </div>
                        <div
                            className='flex items-center justify-center w-6 h-6 transition duration-300 ease-in-out bg-gray-200 rounded-md cursor-pointer group hover:bg-white'>
                            <InstagramIcon className='w-4 h-4 text-gray-700 group-hover:text-[#E4405F]'/>
                        </div>
                    </div>
                    <div className='grid place-items-center'>
                        <Logo className='relative block w-10 h-10 sm:h-14 sm:w-14 md:w-20 md:h-20'/>
                        <h1 className='hidden font-serif font-semibold tracking-wide text-center text-gray-700 sm:mt-2 sm:block sm:text-sm md:text-base'>
                            Sikkim Progressive Youth Forum
                        </h1>
                    </div>
                    <div className='flex items-center justify-end space-x-2'>
                        <div
                            className='flex items-center justify-center w-6 h-6 transition duration-300 ease-in-out bg-gray-200 rounded-md cursor-pointer group hover:bg-white'>
                            <SearchIcon className='w-4 h-4 text-gray-700'/>
                        </div>
                        <div
                            className='flex items-center justify-center w-6 h-6 transition duration-300 ease-in-out bg-gray-200 rounded-md cursor-pointer group hover:bg-white'>
                            <SunIcon className='w-4 h-4 text-gray-700'/>
                        </div>
                        <div
                            className='flex items-center justify-center w-6 h-6 transition duration-300 ease-in-out bg-gray-200 rounded-md cursor-pointer md:hidden group hover:bg-white'>
                            <HamburgerMenuIcon className='w-4 h-4 text-gray-700'/>
                        </div>
                    </div>
                </div>
            </header>
            <nav className='max-w-full px-4 mx-auto sm:block md:max-w-3xl lg:max-w-5xl xl:max-w-6xl md:px-0'>
                <ul className='flex items-center justify-center space-x-6 text-sm text-gray-700 border border-l-0 border-r-0 border-gray-200'>
                    {!loading && menus.map((menu) => (
                        <li>
                            <Link href={menu.link}>
                                <a className='py-3.5 inline-block'>{menu.title}</a>
                            </Link>
                        </li>
                    ))}
                    {loading && (
                        <>
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
                        </>
                    )}
                </ul>
            </nav>
        </>
    )
}

export { Header }
