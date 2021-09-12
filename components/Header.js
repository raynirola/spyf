import Link from "next/link"
import {
	FacebookIcon,
	HamburgerMenuIcon,
	InstagramIcon,
	SearchIcon,
	SunIcon,
	TwitterIcon,
} from "@/utils/icons"
import Logo from "@/components/Logo"

const Header = () => {
	return (
		<>
			<header>
				<div className='grid max-w-xl grid-cols-3 px-4 py-8 mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-6xl md:px-0 sm:py-12'>
					<div className='flex items-center space-x-4'>
						<FacebookIcon className='w-4 h-4 text-gray-700' />
						<TwitterIcon className='w-4 h-4 text-gray-700' />
						<InstagramIcon className='w-4 h-4 text-gray-700' />
					</div>
					<div className='grid place-items-center'>
						<Logo className='relative block w-10 h-10 sm:h-14 sm:w-14 md:w-20 md:h-20' />
						<h1 className='hidden font-serif font-semibold tracking-wide text-center text-gray-700 sm:mt-2 sm:block sm:text-sm md:text-base'>
							Sikkim Progressive Youth Forum
						</h1>
					</div>
					<div className='flex items-center justify-end space-x-4'>
						<SearchIcon className='h-5 w-5 text-gray-700 mb-1.5' />
						<SunIcon className='h-5 w-5 text-gray-700 mb-1.5' />
						<HamburgerMenuIcon className='md:hidden h-5 w-5 text-gray-700 mb-1.5' />
					</div>
				</div>
			</header>
			<nav className='max-w-full px-4 mx-auto sm:block md:max-w-3xl lg:max-w-5xl xl:max-w-6xl md:px-0'>
				<ul className='flex items-center justify-center space-x-6 text-sm text-gray-700 border border-l-0 border-r-0 border-gray-200'>
					<li>
						<Link href='/'>
							<a className='py-3.5 inline-block'>Home</a>
						</Link>
					</li>
					<li>
						<Link href='/articles'>
							<a className='py-3.5 inline-block'>Articles</a>
						</Link>
					</li>
					<li>
						<Link href='/topics'>
							<a className='py-3.5 inline-block'>Topics</a>
						</Link>
					</li>
					<li>
						<Link href='/discuss'>
							<a className='py-3.5 inline-block'>Forum</a>
						</Link>
					</li>
					<li>
						<Link href='/about'>
							<a className='py-3.5 inline-block'>About</a>
						</Link>
					</li>
					<li>
						<Link href='/contact'>
							<a className='py-3.5 inline-block'>Contact</a>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Header
