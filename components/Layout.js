import Header from "../components/Header"
import Footer from "./Footer"
export default function Layout({ children }) {
	return (
		<div className='transition-all duration-300 ease-in-out bg-gray-100'>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
