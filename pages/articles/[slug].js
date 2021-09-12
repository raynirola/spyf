import Head from "next/head"
import Image from "next/image"
import dynamic from "next/dynamic"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import matter from "gray-matter"
import fs from "fs"
import path from "path"
import CustomLink from "@/components/CustomLink"
import Layout from "@/components/Layout"
import { postFilePaths, postPath } from "@/utils/mdxUtils"

const components = {
	a: CustomLink,
	TestComponent: dynamic(() => import("@/components/TestComponent")),
	Head,
	Newsletter: dynamic(() => import("@/components/Newsletter")),
}

export default function PostPage({ data, content }) {
	return (
		<Layout>
			<Head>
				<title>SPYF - {data.title}</title>
				<meta name='title' content={data.title} />
				<meta name='description' content={data.description} />
			</Head>

			<article className='px-4 py-8 mx-auto prose'>
				<header className='mb-8'>
					<h1>{data.title}</h1>
					{data.description && <p className='description'>{data.description}</p>}
					{data.coverImage && (
						<div className='relative overflow-hidden rounded aspect-w-16 aspect-h-8'>
							<Image
								src={require(`../../public/${data.coverImage}`)}
								layout='fill'
								placeholder='blur'
								objectFit='cover'
							/>
						</div>
					)}
				</header>
				<main className='mx-auto prose prose-yellow'>
					<MDXRemote {...content} components={components} />
				</main>
			</article>
		</Layout>
	)
}

export const getStaticProps = async ({ params: { slug } }) => {
	const filePath = path.join(postPath, `${slug}.mdx`)

	const source = fs.readFileSync(filePath)

	const { content, data } = matter(source)

	const mdxSource = await serialize(content)

	return {
		props: { content: mdxSource, data },
	}
}

export const getStaticPaths = async () => {
	const paths = postFilePaths
		.map((path) => path.replace(/\.mdx?$/, ""))
		.map((slug) => ({ params: { slug } }))

	return { paths, fallback: false }
}
