export type User = {
    name: string;
    pic: string;
    id: string;
}

export type Comment = {
    content: string;
    createdAt: string;
    user: User;
    id: string;
}

export type Post = {
    id: string;
    content: string;
    image: string;
    author: User;
    commments: Comment[];
    createdAt: string;
    likes: number;
    userLiked: boolean;
}

export type AddComment = {
    comment: Comment,
    post: Post;
}