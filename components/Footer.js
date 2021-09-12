import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/utils/icons"
import Logo from "./Logo"

const Footer = () => {
	return (
		<footer className='mt-12 bg-white'>
			<div className='max-w-xl px-4 py-8 mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-6xl md:px-0 sm:py-12'>
				<div className='flex flex-col items-center'>
					<Logo className='relative block w-8 h-8 mb-2' />
					<p className='mb-4 text-xs text-gray-500'>
						Sikkim Progressive Youth Forum &copy; {new Date().getFullYear()}
					</p>
					<div className='inline-flex space-x-6'>
						<FacebookIcon className='w-4 h-4 text-gray-700' />
						<TwitterIcon className='w-4 h-4 text-gray-700' />
						<InstagramIcon className='w-4 h-4 text-gray-700' />
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
