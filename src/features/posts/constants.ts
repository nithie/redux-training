import { nanoid } from "nanoid";
import type { FullPost } from "./types";

export const data: FullPost[] = [
    {
        id: "post_1",

        image: '/static/images/posts/bg_1.jpg',
        author: {
            id: 'user_1',
            name: 'Alice Johnson',
            pic: "https://i.pravatar.cc/300?img=4",
        },
        comments: [
            {
                "postId": "post_1",
                "content": "This is message 1.",
                "createdAt": "2025-05-26T10:00:00Z",
                "id": nanoid(),
                "user": {
                    "id": nanoid(),
                    "name": "Alice",
                    "pic": "https://i.pravatar.cc/300?img=1"
                }
            },
            {
                "postId": "post_1",
                "content": "This is message 3.",
                "createdAt": "2025-05-26T10:02:00Z",
                "id": nanoid(),
                "user": {
                    "id": nanoid(),
                    "name": "Charlie",
                    "pic": "https://i.pravatar.cc/300?img=3"
                }
            },

            {
                "postId": "post_1",
                "content": "This is message 5.",
                "createdAt": "2025-05-26T10:04:00Z",
                "id": nanoid(),
                "user": {
                    "id": nanoid(),
                    "name": "Ethan",
                    "pic": "https://i.pravatar.cc/300?img=5"
                }
            },
            {
                "postId": "post_1",
                "content": "This is message 7.",
                "createdAt": "2025-05-26T10:06:00Z",
                "id": nanoid(),
                "user": {
                    "id": nanoid(),
                    "name": "George",
                    "pic": "https://i.pravatar.cc/300?img=7"
                }
            },
            {
                "postId": "post_1",
                "content": "This is message 9.",
                "createdAt": "2025-05-26T10:08:00Z",
                "id": nanoid(),
                "user": {
                    "id": nanoid(),
                    "name": "Ian",
                    "pic": "https://i.pravatar.cc/300?img=9"
                }
            },
        ]
        ,
        content: 'Just captured the perfect sunset! 🌅Nature never fails to amaze me.#GoldenHour #NoFilter',
        createdAt: "2025-05-20T14:32:11Z",
        likes: 10,
        userLiked: false,
    },
    {
        id: "post_2",
        image: '/static/images/posts/bg_2.jpg',
        author: {
            id: nanoid(),
            name: 'John Doe',
            pic: "https://i.pravatar.cc/300?img=3",
        },
        comments: [],
        content: 'Workout done. Endorphins up. Consistency beats motivation every time.#FitnessLife #DailyGrind',
        createdAt: "2025-04-15T08:45:37Z",
        likes: 20,
        userLiked: false,
    },
    {
        id: "post_3",

        image: '/static/images/posts/bg_3.jpg',
        author: {
            id: nanoid(),
            name: 'Charlie Davis',
            pic: "https://i.pravatar.cc/300?img=2",
        },
        comments: [],
        content: 'Mondays are for coffee and quiet vibes. Here’s to a fresh start and focused energy.#MondayMotivation',
        createdAt: "2025-05-01T21:18:59Z",
        likes: 32,
        userLiked: false,
    },
    {
        id: "post_4",

        image: '/static/images/posts/bg_4.jpg',
        author: {
            id: nanoid(),
            name: 'Bob Smith',
            pic: "https://i.pravatar.cc/300?img=1",
        },
        comments: [],
        content: "Travel teaches what books can’t. New city, new stories, same wanderlust. ✈️ #TravelDiaries",
        createdAt: "2025-03-30T03:07:22Z",
        likes: 109,
        userLiked: false,
    },

]