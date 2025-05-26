import type { FunctionComponent } from "react";
import { useParams } from "react-router";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PostCard from "../posts/PostCard";
import { addComment, selectPostById } from "../posts/postsSlice";
import { Grid, Typography } from "@mui/material";
import CommentCard from "./Comment";
import CreateComment from "./CreateComment";
import dayjs from "dayjs";
import { nanoid } from "nanoid";



const Post: FunctionComponent = () => {
    const { id = "" } = useParams();
    const post = useAppSelector(state => selectPostById(state, id));
    const logggedInUser = useAppSelector(state => state.app.loggedinUser);
    const dispatch = useAppDispatch()


    if (!post) {
        return (
            <div>
                Post not found
            </div>
        )
    }

    const submitHandler = (text: string) => {
        dispatch(addComment({
            comment: {
                content: text,
                createdAt: dayjs().toISOString(),
                user: logggedInUser,
                id: nanoid(),
            },
            post: post
        }))
    }

    return (
        <section className="post">
            <PostCard post={post} />
            <Grid container direction="column" gap={1}>
                <Typography variant="h6">Comments</Typography>
                <CreateComment user={logggedInUser} onSubmit={submitHandler} />
                <Grid container direction="column">
                    {post.commments.map((comment) => <CommentCard comment={comment} key={comment.id} />)}
                </Grid>
            </Grid>
            <Typography>{ }</Typography>
        </section>
    );

}

export default Post;