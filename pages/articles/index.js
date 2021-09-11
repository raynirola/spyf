import Head from "next/head"
import Link from "next/link"
import fs from "fs"
import matter from "gray-matter"
import path from "path"
import Layout from "@/components/Layout"
import { postFilePaths } from "@/utils/mdxUtils"

export default function PostIndex({ posts }) {
	return (
		<Layout>
			<Head>
				<title>Articles - Sikkim Progressive Youth Forum</title>
			</Head>
			<ul>
				{posts.map(({ data, slug }) => (
					<li key={slug}>
						<Link as={`/articles/${slug}`} href={`/articles/[slug]`}>
							<a>{data.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</Layout>
	)
}

export function getStaticProps() {
	const posts = postFilePaths.map((filePath) => {
		const source = fs.readFileSync(path.join("posts", filePath))
		const { data } = matter(source)
		const slug = filePath.replace(/\.mdx?$/, "")

		return { data, slug }
	})

	return { props: { posts } }
}
