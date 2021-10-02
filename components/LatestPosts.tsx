import Link from "next/link"
import Image from "next/image"
import { FC } from "react";

import { Post } from "@/models";
import { Tags } from "@/components/Tags";
import { SocialFeed } from "@/components/SocialFeed";
import { ChevronRightIcon } from "@/utils/icons";

interface LatestPostsProps {
    latestPosts: Post[]
}

const LatestPosts: FC<LatestPostsProps> = ({latestPosts}) => {
    return (
        <section className='max-w-xl px-4 mx-auto mt-14 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl md:px-0'>
            <div className='mb-6 flex items-center justify-between'>
                <div>
                    <h2 className='text-sm sm:text-base font-semibold text-gray-800 uppercase tracking-wide'>Latest Updates</h2>
                    <span className='rounded-full mt-1 block h-0.5 bg-yellow-600 w-14'/>
                </div>
                <div>
                    <Link href={"/articles"}>
                        <a className="inline-flex items-center text-sm text-gray-500 hover:underline hover:text-gray-800">
                            Show All
                            <ChevronRightIcon className="w-4 h-4 ml-1" />
                        </a>
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-3'>
                <div className='col-span-3 space-y-3 md:space-y-6 md:col-span-2'>
                    {latestPosts.map((post) => renderItem(post))}
                </div>
                <div className='col-span-3 mt-12 space-y-4 md:mt-0 md:col-span-1'>
                    <Tags/>
                    <SocialFeed/>
                </div>
            </div>
        </section>
    )

    function renderItem(post: Post) {
        return (
            <Link key={post.id} as={`/articles/${post.slug}`} href={`/articles/[slug]`}>
                <a key={post.id}
                   className='block px-4 py-6 transition duration-300 ease-in-out bg-white rounded-md sm:p-6 hover:shadow'>
                    <div className="h-full flex items-start">
                        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                            <span className="font-medium text-lg text-gray-800  leading-none">18</span>
                        </div>
                        <div className="flex-grow pl-6">
                            <h2 className="mb-2 px-2 py-1 text-xs leading-none text-white rounded-full sm:px-3 w-max bg-[#f20a03]">{post.tags[0].toLocaleUpperCase()}</h2>
                            <h1 className=" sm:text-lg font-medium text-gray-800 mb-3 line-clamp-3">{post.title}</h1>
                            <p className="leading-relaxed text-sm mb-5 text-gray-600 line-clamp-4">
                                {post.excerpt}
                            </p>
                            <a className="inline-flex items-center">
                                <div className="relative overflow-hidden w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
                                    <Image
                                        layout="fill"
                                        objectFit="cover"
                                        src={post.author.picture.url}
                                        alt={post.author.name}
                                    />
                                </div>
                                <div className="pl-3">
                                    <span className="block text-sm text-gray-700">{post.author.name}</span>
                                    <span className="block text-xs text-gray-400">{post.author.title}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </a>
            </Link>
        )
    }
}


export
{
    LatestPosts
}
