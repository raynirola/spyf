import Head from "next/head"
import Link from "next/link"
import { AppLayout } from "@/layouts";
import { GetStaticProps, NextPage } from "next";
import { API, GetAllPostsQuery } from "@/api";
import { Post } from "@/models";
import Image from "next/image";

interface PostIndexProps {
    posts: Post[]
}

const PostIndex: NextPage<PostIndexProps> = ({posts}) => {
    return (
        <AppLayout>
            <Head>
                <title>Articles - Sikkim Progressive Youth Forum</title>
            </Head>

            <section className='max-w-xl mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mt-4 px-4 md:px-0' >
                <div className='sm:rounded-md overflow-hidden uppercase text-3xl lg:text-4xl font-black tracking-wide text-white bg-black/30 h-full w-full h-24 sm:h-28 md:h-36 lg:h-52 bg-cover bg-center' style={{backgroundImage: "url('https://media.graphcms.com/8YWNRmqcToS1xbjEZdaL')"}}>
                    <p className="h-full w-full bg-black/30 backdrop-blur-sm grid place-items-center sm:rounded-md">All Articles</p>
                </div>
            </section>

            <section className='max-w-xl px-4 mx-auto mt-8 lg:mt-14 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl md:px-0'>
                <div className='grid lg:grid-cols-2 gap-3 lg:gap-8'>
                    {posts.map((post) => renderItem(post))}
                </div>
            </section>
        </AppLayout>
    )

    function renderItem(post: Post) {
        return (
            <Link key={post.id} as={`/articles/${post.slug}`} href={`/articles/[slug]`}>
                <a key={post.id}
                   className='block px-4 py-6 transition duration-300 ease-in-out bg-white sm:rounded-md sm:p-6 hover:shadow'>
                    <div className="h-full flex items-start">
                        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                            <span className="font-medium text-lg text-gray-800  leading-none">18</span>
                        </div>
                        <div className="flex-grow flex flex-col justify-between h-full pl-6">
                            <div>
                                <h2 className="mb-2 px-2 py-1 text-xs leading-none text-white rounded-full sm:px-3 w-max bg-[#f20a03] uppercase">{post.tags[0]}</h2>
                                <h1 className=" sm:text-lg font-medium text-gray-800 mb-3 line-clamp-3">{post.title}</h1>
                                <p className="leading-relaxed text-sm mb-5 text-gray-600 line-clamp-4">
                                    {post.excerpt}
                                </p>
                            </div>
                            <a className="inline-flex items-center">
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
                                    <span className="block text-sm text-gray-700">{post.author.name}</span>
                                    <span className="block text-xs text-gray-400">Editor SPYF</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </a>
            </Link>
        );
    }
}

export default PostIndex

export const getStaticProps: GetStaticProps = async () => {
    const {data} = await API.query({query: GetAllPostsQuery})
    return {props: {posts: data.posts}}
}