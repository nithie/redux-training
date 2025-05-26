import type { FunctionComponent } from "react";
import { useAppSelector } from "../../app/hooks";
import PostCard from "./PostCard";
import { getAllPosts } from "./selector";

const PostList: FunctionComponent = () => {
    const posts = useAppSelector(getAllPosts);

    console.log('posts', posts);

    if (!posts) {
        return null;
    }

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