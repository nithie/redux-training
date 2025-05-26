import { normalize, schema } from 'normalizr';
import type { User, Comment, Post } from './types';
import { data } from './constants';
import type { AppDispatch } from '../../app/store';
import { postReceived } from './postsSlice';

const mockData = data;

const user = new schema.Entity<User>('users',);

const comment = new schema.Entity<Comment>('comments', { user });

const post = new schema.Entity<Post>('posts', { author: user, comments: [comment] });


export const fetchPost = () => (dispatch: AppDispatch) => {
    const normalized = normalize(mockData, [post]);
    dispatch(postReceived(normalized.entities));
};