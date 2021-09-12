import Image from "next/image"
import Link from "next/link"
import logo from "@/public/images/logo.png"

const Logo = (props) => {
	return (
		<Link href='/'>
			<a {...props}>
				<Image src={logo} alt='Logo' layout='fill' placeholder='blur' title='Sikkim IN' />
			</a>
		</Link>
	)
}

export default Logo
