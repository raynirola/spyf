import Image from "next/image";
import { formattedTime } from "@/utils/time";
import Link from "next/link";
import { FC } from "react";
import { Post } from "@/models";

interface ArticleCardProps {
    post: Post
}
const ArticleCard: FC<ArticleCardProps> = ({post}) => {
    return (
        <Link as={`/articles/${post.slug}`} href={`/articles/[slug]`}>
            <a key={post.id}
               className='block px-4 py-6 transition duration-300 ease-in-out bg-white rounded-md sm:p-6 hover:shadow'>
                <div className="h-full flex items-start">
                    <div className="flex-grow">
                        <a className="inline-flex items-center mb-4">
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
                                <div className="block text-sm text-gray-700">{post.author.name}</div>
                                <time className="block text-xs text-gray-400 font-light">{formattedTime(post.publishedAt)}</time>
                            </div>
                        </a>
                        <h1 className=" sm:text-lg font-medium text-gray-800 mb-2 line-clamp-3">{post.title}</h1>
                        <p className="leading-relaxed text-sm text-gray-600 line-clamp-4 mb-2">
                            {post.excerpt}
                        </p>
                        <div className="flex flex-wrap font-light text-xs text-gray-500">
                            {post.tags.map((tag) => renderTag(tag))}
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
    function renderTag(tag: string) {
        return (
            <div className="mr-4 mt-2" key={tag}>
                <span className="text-gray-300">#</span>
                {tag}
            </div>
        )
    }
};

export { ArticleCard };