/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type { Comment, FullPost, NormalisedPost } from "./types";

const initialState: NormalisedPost = {
    posts: {},
    users: {},
    comments: {},
}

export const postSlice = createSlice({
    initialState: initialState,
    name: 'posts',
    reducers: {
        postReceived(state, action: PayloadAction<NormalisedPost>) {
            console.log(action.payload)
            const { users, posts, comments } = action.payload;
            if (users) state.users = { ...state.users, ...users };
            if (posts) state.posts = { ...state.posts, ...posts };
            if (comments) state.comments = { ...state.comments, ...comments };
        },
        likePost(state, action: PayloadAction<FullPost>) {
            const { id } = action.payload;
            if (state.posts[id]) {
                if (state.posts[id].userLiked) {
                    state.posts[id].userLiked = false;
                    state.posts[id].likes += 1;

                } else {
                    state.posts[id].userLiked = true;
                    state.posts[id].likes -= 1;
                }
            }
        },
        addComment(state, action: PayloadAction<Comment>) {
            state.comments[action.payload.id] = action.payload;
        }
    }
});

export const { likePost, addComment, postReceived } = postSlice.actions;

export const selectPostById = (state: RootState, postId: string) =>
    state.posts.posts[postId];

