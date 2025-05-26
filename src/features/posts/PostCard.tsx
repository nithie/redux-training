
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Avatar,
    IconButton,
    Typography,
    Grid
} from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import type { Post } from './types';
import type { FunctionComponent } from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router';
import { useAppDispatch } from '../../app/hooks';
import { likePost } from './postsSlice';

type Props = {
    post: Post;
}

const PostCard: FunctionComponent<Props> = ({ post }: Props) => {
    const dispatch = useAppDispatch();

    const reactionHandler = () => {
        dispatch(likePost(post))
    }

    return (
        <Card sx={{ maxWidth: 500, margin: 'auto', my: 4 }}>
            <CardHeader
                avatar={<Avatar src={post.author.pic} />}
                action={<IconButton><MoreVertIcon /></IconButton>}
                title={post.author.name}
                subheader={dayjs(post.createdAt).format('DD MMM, YY')}
            />
            <CardMedia
                component="img"
                height="400"
                image={post.image}
                alt="Post image"
            />
            <CardContent sx={{ px: 2 }}>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '8px', alignItems: "start" }}>
                    <Grid container alignItems="center">
                        <IconButton onClick={reactionHandler}>{post.userLiked ? <FavoriteIcon color='error' /> : <FavoriteBorderIcon />}</IconButton>
                        <Typography variant="body2" fontWeight="bold">
                            {post.likes}
                        </Typography>
                    </Grid>
                    <Grid container alignItems="center">
                        <Link to={`post/${post.id}`}><IconButton><ChatBubbleOutlineIcon /></IconButton></Link>
                        {post.commments.length > 0 && <Typography variant="body2" fontWeight="bold">
                            {post.commments.length}
                        </Typography>}
                    </Grid>
                    <IconButton><SendIcon /></IconButton>
                </div>
                <Typography variant="body2">
                    {post.content}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default PostCard;
