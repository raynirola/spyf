import Image from "next/image"
import Link from "next/link"
import logo from "@/public/images/logo.png"

const Logo = () => {
	return (
		<Link href='/'>
			<a className='relative w-10 h-10 sm:h-14 sm:w-14 md:w-20 md:h-20'>
				<Image src={logo} alt='Logo' layout='fill' placeholder='blur' title='Sikkim IN' />
			</a>
		</Link>
	)
}

export default Logo
