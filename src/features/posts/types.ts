export type User = {
    name: string;
    pic: string;
    id: string;
}

export type Comment = {
    content: string;
    createdAt: string;
    user: string;
    id: string;
    postId: string;
}

export type Post = {
    id: string;
    content: string;
    image: string;
    author: string;
    comments: string[];
    createdAt: string;
    likes: number;
    userLiked: boolean;
}

export type FullComment = {
    content: string;
    createdAt: string;
    user: User;
    id: string;
    postId: string;
}

export type FullPost = {
    id: string;
    content: string;
    image: string;
    author: User;
    comments: FullComment[];
    createdAt: string;
    likes: number;
    userLiked: boolean;
}
export type NormalisedPost = {
    posts?: Record<string, Post>;
    users?: Record<string, User>;
    comments?: Record<string, Comment>;
}