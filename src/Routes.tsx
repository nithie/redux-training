import { Routes, Route } from "react-router";
import Layout from "./utils/components/Layout";
import PostList from "./features/posts/PostList";
import Post from "./features/post";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<PostList />} />
                <Route path="/post/:id" element={<Post />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;