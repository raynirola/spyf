import Head from "next/head"
import { GetStaticProps, NextPage } from "next";

import { Post } from "@/models";
import { AppLayout } from "@/layouts";
import { ArticleCard } from "@/components";
import { API, GetAllPostsQuery } from "@/api";

interface PostIndexProps {
    posts: Post[]
}

const PostIndex: NextPage<PostIndexProps> = ({posts}) => {
    return (
        <AppLayout>
            <Head>
                <title>Articles - Sikkim Progressive Youth Forum</title>
            </Head>

            <section className='max-w-xl mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mt-4 px-4 xl:px-0' >
                <div className='rounded-md overflow-hidden uppercase md:text-2xl lg:text-4xl font-black tracking-wide text-white w-full h-24 sm:h-28 md:h-36 lg:h-52 bg-cover bg-center' style={{backgroundImage: "url('https://media.graphcms.com/8YWNRmqcToS1xbjEZdaL')"}}>
                    <p className="h-full w-full bg-black/30 backdrop-blur-sm grid place-items-center rounded-md">All Articles</p>
                </div>
            </section>

            <section className='max-w-xl px-4 mx-auto mt-8 lg:mt-14 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl xl:px-0'>
                <div className='grid lg:grid-cols-2 gap-3'>
                    {posts.map((post) => <ArticleCard key={post.id} post={post}/>)}
                </div>
            </section>
        </AppLayout>
    )
}

export default PostIndex

export const getStaticProps: GetStaticProps = async () => {
    const {data} = await API.query({query: GetAllPostsQuery})
    return {props: {posts: data.posts}}
}