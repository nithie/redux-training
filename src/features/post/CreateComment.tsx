import { useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import type { User } from '../posts/types';

type Props = {
    user: User;
    onSubmit: (text: string) => void;
}

const CreateComment = ({ user, onSubmit }: Props) => {
    const [comment, setComment] = useState('');

    const handleSubmit = () => {
        if (comment.trim()) {
            onSubmit(comment.trim());
            setComment('');
        }
    };

    return (
        <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
            <Stack direction="row" spacing={2}>
                <Avatar src={user.pic}>
                    {!user.pic && user.name[0]}
                </Avatar>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        {user.name || 'Anonymous'}
                    </Typography>
                    <TextField
                        fullWidth
                        multiline
                        minRows={2}
                        placeholder="Write a comment..."
                        value={comment}
                        onChange={(e) => { setComment(e.target.value); }}
                        variant="outlined"
                        size="small"
                    />
                    <Box sx={{ mt: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={handleSubmit}
                            disabled={!comment.trim()}
                        >
                            Post
                        </Button>
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default CreateComment;
