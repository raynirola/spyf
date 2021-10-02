export interface Asset {
    __typename: string
    url: string
}

export interface Author {
    __typename: string
    id: string
    name: string
    title?: string
    picture?: Asset
}

export interface PostContent {
    __typename: string
    html?: string,
    markdown?: string,
    raw?: string
}

export interface Post {
    __typename: string
    id: string
    title: string
    slug: string
    coverImage?: Asset
    excerpt?: string
    tags?: string[]
    author?: Author
    content?: PostContent
    publishedAt?: string
    seo?: SEO
}

export interface SEO {
    __typename: string
    title: string
    description: string
    image: Asset
    keywords: string[]
}

export interface Member {
    name: string
    bio?: string
    avatar?: string
    designation?: string
}