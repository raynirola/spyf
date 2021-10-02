import { FC } from "react";
import Link from "next/link"
import Image from "next/image"

import { Post } from "@/models";

interface FeaturedPostsProps {
    posts: Post[]
}

const topicColor = "#f20a03"

const FeaturedPosts: FC<FeaturedPostsProps> = ({posts}) => {
    return (
        <section className='max-w-xl sm:px-4 mx-auto sm:mt-6 sm:mt-14 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl xl:px-0'>
            <div className='grid aspect-w-1 aspect-h-1 md:aspect-w-16 md:aspect-h-7'>
                <div className='grid grid-cols-2 grid-rows-3 sm:gap-2 md:grid-cols-3 md:grid-rows-2'>
                    {renderPosts(posts)}
                </div>
            </div>
        </section>
    )
}

function renderPosts(posts: Post[]) {
    return posts.map((post, index) => index === 0 ? renderBigItem(post) : renderItem(post))
}

const renderBigItem: FC<Post> = (post) => {
    return (
        <div key={post.id} className='relative col-span-2 row-span-2 overflow-hidden sm:rounded-md md:col-span-2 md:row-span-2'>
            <Image src={post.coverImage.url} layout='fill'/>
            <div
                className='relative flex flex-col justify-end h-full p-3 text-white bg-gradient-to-t from-black to-transparent sm:p-4 md:p-6 bg-opacity-20'>
                <p className='px-2 py-1 mb-1 text-xs leading-none rounded-full sm:px-3 w-max'
                   style={{backgroundColor: topicColor}}>
                    {post.tags[0]}
                </p>
                <Link as={`/articles/${post.slug}`} href={`/articles/[slug]`}>
                    <a className='text-sm font-medium sm:text-base hover:underline line-clamp-2'>
                        {post.title}
                    </a>
                </Link>
            </div>
        </div>
    )
}

const renderItem: FC<Post> = (post) => {
    return (
        <div key={post.id} className='relative overflow-hidden sm:rounded-md'>
            <Image src={post.coverImage.url} layout='fill'/>
            <div className='relative flex flex-col justify-end h-full p-3 text-white bg-gradient-to-t from-black to-transparent sm:p-4 md:p-6 bg-opacity-20'>
                <p className='px-2 py-1 mb-1 text-xs leading-none rounded-full sm:px-3 w-max'
                   style={{backgroundColor: topicColor}}>
                    {post.tags[0]}
                </p>
                <Link as={`/articles/${post.slug}`} href={`/articles/[slug]`}>
                    <a className='text-sm font-medium sm:text-base hover:underline line-clamp-2'>
                        {post.title}
                    </a>
                </Link>
            </div>
        </div>
    )
}

export { FeaturedPosts }
