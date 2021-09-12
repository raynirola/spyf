import Link from "next/link"

const LatestPosts = ({ latestPosts }) => {
	return (
		<section className='max-w-xl px-4 mx-auto mt-14 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl md:px-0'>
			<h2>Latest Articles</h2>
			<div className='grid grid-cols-3 gap-3'>
				<div className='col-span-3 space-y-3 md:space-y-6 md:col-span-2'>
					{latestPosts.map((post) => renderItem(post))}
				</div>
				<div className='col-span-3 mt-12 space-y-4 md:mt-0 md:col-span-1'>
					<div className='flex items-center justify-center h-64 text-xs font-light text-gray-500 bg-white rounded-md'>
						Sponsored Content
					</div>
					<div className='flex items-center justify-center h-48 text-xs font-light text-gray-500 bg-white rounded-md'>
						Newsletter
					</div>
				</div>
			</div>
		</section>
	)
}

const renderItem = ({ data, slug }) => {
	const topicColor = "#" + data.topic.color
	return (
		<Link key={slug} as={`/articles/${slug}`} href={`/articles/[slug]`}>
			<a className='block px-4 py-6 transition duration-300 ease-in-out bg-white sm:rounded-md sm:p-6 hover:shadow-lg'>
				<p
					className={`px-2 py-1 mb-2 text-xs leading-none text-white rounded-full sm:px-3 w-max`}
					style={{ backgroundColor: topicColor }}>
					{data.topic.name}
				</p>

				<h2 className='mb-2 text-sm font-semibold leading-relaxed sm:text-base line-clamp-2'>
					{data.title}
				</h2>

				<p className='text-sm leading-relaxed tracking-wide text-gray-600'>
					{data.description}
				</p>

				<p className='mt-6 text-xs font-medium text-gray-500 uppercase hover:underline line-clamp-2'>
					Read more
				</p>
			</a>
		</Link>
	)
}

export default LatestPosts
