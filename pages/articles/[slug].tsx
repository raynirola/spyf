import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head"
import Image from "next/image"

import { Post } from "@/models";
import { Tag } from "@/components";
import { AppLayout } from "@/layouts";
import { formattedTime } from "@/utils/time";
import { AllPostSlugQuery, API, GetPostBySlugQuery } from "@/api";

interface PostPageProps {
    post: Post
}

const PostPage: NextPage<PostPageProps> = ({post}) => {
    return (
        <AppLayout>
            <Head>
                <title>SPYF - {post.title}</title>
                <meta name='title' content={post.seo.title}/>
                <meta name='description' content={post.seo.description}/>
            </Head>

            <main>
                <header className='max-w-xl sm:px-4 mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-6xl xl:px-0'>
                    <div className='pt-4 sm:py-8 md:py-10 lg:py-12'>
                        <div className="px-4 sm:px-0 max-w-3xl mx-auto mb-8 lg:mb-12">
                            <nav className="flex flex-wrap font-light text-xs lg:text-base text-gray-500 mb-4">
                                {post.tags.map(tag => <Tag key={tag} tag={tag}/>)}
                            </nav>
                            <div className="prose prose-sm sm:prose lg:prose-lg mb-6 min-w-full">
                                <h1>{post.title}</h1>
                            </div>
                            <div className="flex items-center mb-6">
                                <div
                                    className="relative overflow-hidden w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
                                    <Image
                                        layout="fill"
                                        objectFit="cover"
                                        src={post.author.picture.url}
                                        alt={post.author.name}
                                    />
                                </div>
                                <div className="pl-3">
                                    <div className="block text-sm font-semibold text-gray-700">{post.author.name}</div>
                                    <time
                                        className="block text-xs text-gray-500 font-light">{formattedTime(post.publishedAt)}</time>
                                </div>
                            </div>
                        </div>
                        <div
                            className='relative overflow-hidden rounded aspect-w-5 aspect-h-3 md:aspect-w-16 md:aspect-h-6'>
                            <Image
                                src={post.coverImage.url}
                                layout='fill'
                                objectFit='cover'
                            />
                        </div>
                    </div>
                </header>
                <article className="bg-white">
                    <div className="max-w-xl px-4 mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-6xl xl:px-0">
                        <section
                            className="py-8 max-w-3xl prose lg:prose-lg prose-yellow mx-auto sm:pb-16 md:pb-24 lg:pb-36"
                            dangerouslySetInnerHTML={{__html: post.content.html}}
                        />
                    </div>
                </article>
            </main>
        </AppLayout>
    )
};

export default PostPage

export const getStaticProps: GetStaticProps = async ({params}) => {

    const {data} = await API.query<{ post: Post }>({
        query: GetPostBySlugQuery,
        variables: {slug: params.slug}
    })

    return {
        props: {post: data.post},
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const {data} = await API.query<{ posts: Post[] }>({query: AllPostSlugQuery})
    const paths = data.posts.map((post) => ({params: {slug: post.slug}}))
    return {paths, fallback: false}
}
