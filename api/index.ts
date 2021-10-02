import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const API = new ApolloClient({
    uri: "https://api-ap-northeast-1.graphcms.com/v2/cku2ay4oz54kj01yuc4ua3s9n/master",
    cache: new InMemoryCache(),
});

const FeaturedPostsQuery = gql(`
    query postsForHomePage {
          posts(orderBy: publishedAt_ASC, first: 3, where: {featured: true}) {
                id
                title
                slug
                coverImage {
                    url
                }
                tags
                excerpt
                publishedAt
          }
    }
`)

const GetAllPostsQuery = gql(`
    query postsForHomePage {
          posts(orderBy: publishedAt_ASC) {
                id
                title
                slug
                coverImage {
                    url
                }
                tags
                author {
                    id
                    name
                    picture {
                        url
                    }
                }
                excerpt
                publishedAt
          }
    }
`)

const GetLatestPostsQuery = gql(`
    query postsForHomePage {
          posts(orderBy: publishedAt_ASC, first: 6) {
                id
                title
                slug
                coverImage {
                    url
                }
                tags
                author {
                    id
                    name
                    title
                    picture {
                        url
                    }
                }
                excerpt
                publishedAt
          }
    }
`)

const AllPostSlugQuery = gql(`
    query postsSlug {
          posts {
                slug
          }
    }
`)


const GetPostBySlugQuery = gql(`
    query SinglePost($slug: String!) {
          post(where: {slug: $slug}){
                id
                title
                slug
                updatedAt
                publishedAt
                coverImage{
                    url
                }
                seo{
                      title
                      description
                      keywords
                      image{
                        url
                      }
                }
                tags
                author{
                      name
                      id
                      picture{
                        url
                      }
                }
                content{
                    html
                }
          }
    }
`)

const GetMenusQuery = gql(`
    query getAllMenus {
      menus {
        id
        title
        link
      }
    }
`)

const GetAllTagsQuery = gql(`
    query getAllTags {
        tags
    }
`)


export {
    API,
    FeaturedPostsQuery,
    AllPostSlugQuery,
    GetPostBySlugQuery,
    GetMenusQuery,
    GetAllPostsQuery,
    GetLatestPostsQuery,
    GetAllTagsQuery
};