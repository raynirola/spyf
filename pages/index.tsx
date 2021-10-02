import Head from "next/head"
import { GetStaticProps, NextPage } from "next";

import { Post } from "@/models";
import { API, FeaturedPostsQuery, GetLatestPostsQuery } from "@/api";

import { AppLayout } from "@/layouts"
import { FeaturedPosts } from "@/components";
import { LatestPosts } from "@/components";

interface HomePageProps {
    featuredPosts: Post[],
    latestPosts: Post[],
}

const HomePage: NextPage<HomePageProps> = ({featuredPosts, latestPosts}) => {
    return (
        <AppLayout>
            <Head>
                <title>Sikkim Progressive Youth Forum</title>
            </Head>
            <FeaturedPosts posts={featuredPosts}/>
            <LatestPosts latestPosts={latestPosts}/>
        </AppLayout>
    );
}

export default HomePage

export const getStaticProps: GetStaticProps = async () => {
    const {data: featuredPosts} = await API.query<{ posts: Post[] }>({query: FeaturedPostsQuery})
    const {data: latestPosts} = await API.query<{ posts: Post[] }>({query: GetLatestPostsQuery})
    return {props: {featuredPosts: featuredPosts.posts, latestPosts: latestPosts.posts}}
}
