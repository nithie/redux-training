import type { FunctionComponent } from "react";
import { useAppSelector } from "../../app/hooks";
import PostCard from "./PostCard";

const PostList: FunctionComponent = () => {
    const posts = useAppSelector(state => state.posts);

    const renderedPosts = posts.map(post => (
        <PostCard post={post} key={post.id} />
    ));

    return (
        <section className="posts-list">
            {renderedPosts}
        </section>
    );

}

export default PostList;