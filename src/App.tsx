import { useEffect } from "react";
import "./App.css"
import { useAppDispatch } from "./app/hooks"
import AppRoutes from "./Routes"
import { fetchPost } from "./features/posts/fetchPosts";

export const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPost())
  }, [dispatch]);

  <AppRoutes />
}
