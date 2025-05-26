import type { FunctionComponent } from 'react';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Typography,
    Stack
} from '@mui/material';
import type { Comment } from '../posts/types';

type Props = {
    comment: Comment;
}

const CommentCard: FunctionComponent<Props> = ({ comment }: Props) => {
    const { content, createdAt, user } = comment;
    const { name, pic } = user;

    return (
        <Card variant="outlined" sx={{ mb: 2, p: 2 }}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
                <Avatar src={pic} alt={name}>
                    {!pic && name[0]}
                </Avatar>
                <Box>
                    <Typography variant="subtitle2">{name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                        {new Date(createdAt).toLocaleString()}
                    </Typography>
                    <CardContent sx={{ pl: 0, pt: 0 }}>
                        <Typography variant="body1">{content}</Typography>
                    </CardContent>
                </Box>
            </Stack>
        </Card>
    );
};

export default CommentCard;
