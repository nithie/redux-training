import type { RootState } from '../../app/store';
import type { FullPost } from './types';



export const selectPostById = (state: RootState, postId: string): FullPost | null => {
    const post = state.posts.posts[postId]

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!post) return null;

    return {
        ...post,
        author: state.posts.users[post.author],
        comments: post.comments.map(commentId => {
            const comment = state.posts.comments[commentId];
            return {
                ...comment,
                user: state.posts.users[comment.user],
            };
        }),
    };
};

export const getAllPosts = (state: RootState): FullPost[] | null => {

    const hasPosts = Object.keys(state.posts.posts).length > 0;
    if (hasPosts) {
        const postsKeys = Object.keys(state.posts.posts);
        return postsKeys.map((key) => {
            const post = state.posts.posts[key];
            console.log(post);
            return {
                ...post,
                author: state.posts.users[post.author],
                comments: post.comments.map(commentId => {
                    const comment = state.posts.comments[commentId];
                    return {
                        ...comment,
                        user: state.posts.users[comment.user],
                    };
                }),
            }
        });
    }
    return null;
};