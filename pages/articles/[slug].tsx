import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head"
import Image from "next/image"

import { AppLayout } from "@/layouts";
import { Post } from "@/models";
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

            <article className='px-4 py-8 mx-auto prose'>
                <header className='mb-8'>
                    <h1>{post.title}</h1>
                    <p className='description'>{post.excerpt}</p>
                    <div className='relative overflow-hidden rounded aspect-w-16 aspect-h-8'>
                        <Image
                            src={post.coverImage.url}
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                </header>
                <main className='mx-auto'>
                    <article
                        className="prose prose-yellow"
                        dangerouslySetInnerHTML={{__html: post.content.html}}
                    />
                </main>
            </article>
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
