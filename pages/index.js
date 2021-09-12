import Head from "next/head"
import matter from "gray-matter"
import fs from "fs"
import path from "path"
import Layout from "@/components/Layout"
import { postFilePaths, postPath } from "@/utils/mdxUtils"
import FeaturedPosts from "@/components/FeaturedPosts"
import LatestPosts from "@/components/LatestPosts"

export default function Index({ featuredPosts, latestPosts }) {
	return (
		<Layout>
			<Head>
				<title>Sikkim Progressive Youth Forum</title>
			</Head>

			<FeaturedPosts featuredPosts={featuredPosts} />

			<LatestPosts latestPosts={latestPosts} />
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
		.sort((a, b) => Number(new Date(b.data.publishedAt)) - Number(new Date(a.data.publishedAt)))
		.slice(0, 9)

	return { props: { featuredPosts, latestPosts } }
}
