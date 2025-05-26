import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type { AddComment, Post } from "./types";
import { data } from "./constants";

const initialState: Post[] = data;

export const postSlice = createSlice({
    initialState,
    name: 'posts',
    reducers: {
        likePost(state, action: PayloadAction<Post>) {
            const { id } = action.payload;

            const post = state.find((post) => post.id === id);
            if (post) {
                if (post.userLiked) {
                    post.userLiked = false;
                    post.likes -= 1;
                } else {
                    post.userLiked = true;
                    post.likes += 1;
                }
            }
        },
        addComment(state, action: PayloadAction<AddComment>) {
            const { comment, post } = action.payload;
            // const index = state.findIndex((item) => item.id === post.id);
            return state.map((item) => {
                if (item.id !== post.id) {
                    return item;
                }
                return {
                    ...item, commments: item.commments.concat(comment)
                }

            })

        }
    }
});

export const { likePost, addComment } = postSlice.actions;

export const selectPostById = (state: RootState, postId: string) =>
    state.posts.find(post => post.id === postId)

