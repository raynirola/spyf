import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/utils/icons"
import Logo from "./Logo"

const Footer = () => {
	return (
		<footer className='mt-12'>
			<div className='max-w-xl px-4 py-8 mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-6xl md:px-0 sm:py-12'>
				<div className='flex flex-col items-center'>
					<Logo className='relative block w-8 h-8 mb-2' />
					<p className='mb-4 text-xs text-gray-500'>
						Sikkim Progressive Youth Forum &copy; {new Date().getFullYear()}
					</p>
					<div className='inline-flex space-x-2'>
						<div className='flex items-center justify-center w-6 h-6 transition duration-300 ease-in-out bg-gray-200 rounded-md cursor-pointer group hover:bg-white'>
							<FacebookIcon className='w-4 h-4 text-gray-700 group-hover:text-[#1877F2]' />
						</div>
						<div className='flex items-center justify-center w-6 h-6 transition duration-300 ease-in-out bg-gray-200 rounded-md cursor-pointer group hover:bg-white'>
							<TwitterIcon className='w-4 h-4 text-gray-700 group-hover:text-[#1DA1F2]' />
						</div>
						<div className='flex items-center justify-center w-6 h-6 transition duration-300 ease-in-out bg-gray-200 rounded-md cursor-pointer group hover:bg-white'>
							<InstagramIcon className='w-4 h-4 text-gray-700 group-hover:text-[#E4405F]' />
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
