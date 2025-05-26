import type { FunctionComponent } from "react";
import { useParams } from "react-router";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PostCard from "../posts/PostCard";
import { addComment } from "../posts/postsSlice";
import { Grid, Typography } from "@mui/material";
import CommentCard from "./Comment";
import CreateComment from "./CreateComment";
import dayjs from "dayjs";
import { nanoid } from "nanoid";
import type { Post } from "../posts/types";
import { selectPostById } from "../posts/selector";
import type { RootState } from "../../app/store";



const Post: FunctionComponent = () => {
    const { id = "" } = useParams();
    const post = useAppSelector((state: RootState) => selectPostById(state, id));
    const logggedInUser = useAppSelector(state => state.app.loggedinUser);
    const dispatch = useAppDispatch()


    if (!post?.id) {
        return (
            <div>
                Post not found
            </div>
        )
    }

    const submitHandler = (text: string) => {
        dispatch(addComment(
            {
                content: text,
                createdAt: dayjs().toISOString(),
                user: logggedInUser.id,
                id: nanoid(),
                postId: post.id
            },
        ))
    }

    return (
        <section className="post">
            <PostCard post={post} />
            <Grid container direction="column" gap={1}>
                <Typography variant="h6">Comments</Typography>
                <CreateComment user={logggedInUser} onSubmit={submitHandler} />
                <Grid container direction="column">
                    {post.comments.map((comment) => <CommentCard comment={comment} key={comment.id} />)}
                </Grid>
            </Grid>
            <Typography>{ }</Typography>
        </section>
    );

}

export default Post;