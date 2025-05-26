import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../features/posts/types";

const user: User = {
    name: 'Anderson',
    id: 'user_11',
    pic: 'static/images/2.jpg'


}

export const appSlice = createSlice({
    initialState: {
        loggedinUser: user
    },
    name: 'app',
    reducers: {
    }
});



