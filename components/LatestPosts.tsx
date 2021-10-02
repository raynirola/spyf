import Link from "next/link"
import { FC } from "react";

import { Post } from "@/models";
import { Tags } from "@/components/Tags";
import { SocialFeed } from "@/components/SocialFeed";
import { ChevronRightIcon } from "@/utils/icons";
import { ArticleCard } from "@/components/ArticleCard";

interface LatestPostsProps {
    latestPosts: Post[]
}

const LatestPosts: FC<LatestPostsProps> = ({latestPosts}) => {
    return (
        <section className='max-w-xl px-4 mx-auto mt-14 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl md:px-0'>
            <div className='mb-6 flex items-center justify-between'>
                <div>
                    <h2 className='text-sm sm:text-base font-semibold text-gray-800 uppercase tracking-wide'>Latest
                        Updates</h2>
                    <span className='rounded-full mt-1 block h-0.5 bg-yellow-600 w-14'/>
                </div>
                <div>
                    <Link href={"/articles"}>
                        <a className="inline-flex items-center text-sm text-gray-500 hover:underline hover:text-gray-800">
                            Show All
                            <ChevronRightIcon className="w-4 h-4 ml-1"/>
                        </a>
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-3'>
                <div className='col-span-3 space-y-3 md:space-y-6 md:col-span-2'>
                    {latestPosts.map((post) => <ArticleCard key={post.id} post={post}/>)}
                </div>
                <div className='col-span-3 mt-12 space-y-4 md:mt-0 md:col-span-1'>
                    <Tags/>
                    <SocialFeed/>
                </div>
            </div>
        </section>
    )
}

export { LatestPosts }
