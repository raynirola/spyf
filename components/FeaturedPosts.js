import Link from "next/link"
import Image from "next/image"

const FeaturedPosts = ({ featuredPosts }) => {
	return (
		<section className='max-w-xl px-4 mx-auto mt-6 sm:mt-14 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl md:px-0'>
			<div className='grid aspect-w-1 aspect-h-1 md:aspect-w-16 md:aspect-h-7'>
				<div className='grid grid-cols-2 grid-rows-3 gap-2 md:grid-cols-3 md:grid-rows-2'>
					{renderPosts(featuredPosts)}
				</div>
			</div>
		</section>
	)
}

const renderPosts = (posts) =>
	posts.map(({ data, slug }, index) =>
		index === 0 ? renderBigItem({ data, slug }) : renderItem({ data, slug })
	)

const renderBigItem = ({ data, slug }) => {
	const topicColor = "#" + data.topic.color
	return (
		<div
			key={slug}
			className='relative col-span-2 row-span-2 overflow-hidden rounded-md md:col-span-2 md:row-span-2'>
			<Image src={require("../public/" + data.coverImage)} layout='fill' placeholder='blur' />
			<div className='relative flex flex-col justify-end h-full p-3 text-white bg-gradient-to-t from-black to-transparent sm:p-4 md:p-6 bg-opacity-20'>
				<p
					className='px-2 py-1 mb-1 text-xs leading-none rounded-full sm:px-3 w-max'
					style={{ backgroundColor: topicColor }}>
					{data.topic.name}
				</p>
				<Link as={`/articles/${slug}`} href={`/articles/[slug]`}>
					<a className='text-sm font-medium sm:text-base hover:underline line-clamp-2'>
						{data.title}
					</a>
				</Link>
			</div>
		</div>
	)
}

const renderItem = ({ data, slug }) => {
	const topicColor = "#" + data.topic.color
	return (
		<div key={slug} className='relative overflow-hidden rounded-md'>
			<Image src={require("../public/" + data.coverImage)} layout='fill' placeholder='blur' />
			<div className='relative flex flex-col justify-end h-full p-3 text-white bg-gradient-to-t from-black to-transparent sm:p-4 md:p-6 bg-opacity-20'>
				<p
					className='px-2 py-1 mb-1 text-xs leading-none rounded-full sm:px-3 w-max'
					style={{ backgroundColor: topicColor }}>
					{data.topic.name}
				</p>
				<Link as={`/articles/${slug}`} href={`/articles/[slug]`}>
					<a className='text-sm font-medium sm:text-base hover:underline line-clamp-2'>
						{data.title}
					</a>
				</Link>
			</div>
		</div>
	)
}

export default FeaturedPosts
