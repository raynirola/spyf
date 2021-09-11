import Head from "next/head"
import matter from "gray-matter"
import fs from "fs"
import path from "path"
import Layout from "@/components/Layout"
import { postFilePaths, postPath } from "@/utils/mdxUtils"
import FeaturedPosts from "@/components/FeaturedPosts"

export default function Index({ featuredPosts, latestPosts }) {
	return (
		<Layout>
			<Head>
				<title>Sikkim Progressive Youth Forum</title>
			</Head>

			<FeaturedPosts featuredPosts={featuredPosts} />
			<section className='mt-14 max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 md:px-0'>
				<div className='grid grid-cols-3 gap-8'>
					<div className='col-span-3 md:col-span-2 space-y-4'>
						<div className='bg-gray-200 h-72' />
						<div className='bg-gray-200 h-72' />
						<div className='bg-gray-200 h-72' />
						<div className='flex items-center justify-center space-x-6 pt-12'>
							<div className='w-24 h-12 bg-gray-200' />
							<div className='w-14 h-12 bg-gray-200' />
							<div className='w-14 h-12 bg-gray-200' />
							<div className='w-14 h-12 bg-gray-200' />
							<div className='w-24 h-12 bg-gray-200' />
						</div>
					</div>
					<div className='space-y-4 mt-12 md:mt-0 col-span-3 md:col-span-1'>
						<div className='bg-gray-200 h-96' />
						<div className='bg-gray-200 h-72' />
						<div className='bg-gray-200 h-48' />
						<div className='bg-gray-200 h-48' />
					</div>
				</div>
			</section>

			<section className='mt-32 max-w-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 md:px-0'>
				<div className='grid grid-cols-4 gap-4 md:gap-8'>
					<div className='space-y-4 col-span-2 md:col-span-1'>
						<div className='bg-gray-200 h-12' />
						<div className='bg-gray-200 h-28' />
						<div className='bg-gray-200 h-28' />
						<div className='bg-gray-200 h-28' />
					</div>
					<div className='space-y-4 col-span-2 md:col-span-1'>
						<div className='bg-gray-200 h-12' />
						<div className='bg-gray-200 h-28' />
						<div className='bg-gray-200 h-28' />
						<div className='bg-gray-200 h-28' />
					</div>
					<div className='space-y-4 col-span-2 md:col-span-1'>
						<div className='bg-gray-200 h-12' />
						<div className='bg-gray-200 h-72' />
					</div>
					<div className='space-y-4 col-span-2 md:col-span-1'>
						<div className='bg-gray-200 h-12' />
						<div className='bg-gray-200 h-20' />
						<div className='bg-gray-200 h-20' />
						<div className='bg-gray-200 h-20' />
					</div>
				</div>
			</section>

			<section className='my-32 max-w-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 md:px-0'>
				<div className='flex items-center justify-between space-x-6'>
					<div className='bg-gray-200 h-6 w-48' />
					<div className='bg-gray-200 h-6 w-48' />
					<div className='bg-gray-200 h-6 w-48' />
					<div className='bg-gray-200 h-6 w-48' />
					<div className='bg-gray-200 h-6 w-48' />
				</div>
			</section>
		</Layout>
	)
}

export function getStaticProps() {
	const featuredPosts = postFilePaths
		.map((filePath) => {
			const source = fs.readFileSync(path.join(postPath, filePath))
			const { data } = matter(source)
			const slug = filePath.replace(/\.mdx?$/, "")

			return { data, slug }
		})
		.filter((post) => post.data.featured)
		.sort((a, b) => Number(new Date(b.data.publishedAt)) - Number(new Date(a.data.publishedAt)))
		.slice(0, 3)

	const latestPosts = postFilePaths
		.map((filePath) => {
			const source = fs.readFileSync(path.join(postPath, filePath))
			const { data } = matter(source)
			const slug = filePath.replace(/\.mdx?$/, "")

			return { data, slug }
		})
		.filter((post) => !post.data.featured)
		.sort((a, b) => Number(new Date(b.data.publishedAt)) - Number(new Date(a.data.publishedAt)))
		.slice(0, 9)

	return { props: { featuredPosts, latestPosts } }
}
