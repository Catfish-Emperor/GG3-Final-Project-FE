import React, { useState } from 'react';
import {Flex, Box, Avatar, useColorModeValue, Input, Button} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { backendPort } from '../config';
import { usePostData } from '../hooks/usePostData';

export default function CommentForm() {
    const [userName, setUserName] = useState('');
    const [comment, setComment] = useState('');
    const { id } = useParams();
    const bubbleColor = useColorModeValue('blue.100', 'gray.700');
    const PORT = backendPort;

    const { postData, loading } = usePostData(`${PORT}/comment/${id}`);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userName.trim() || !comment.trim()) {
            alert('Username and Comment must not be empty');
            return;
        }

        const success = await postData({ userName, comment });

        if (success) {
            setUserName('');
            setComment('');
            window.location.reload();
        }
    };

    return (
        <Flex direction="column" alignItems="center" mt={4} width="full">
            <Box
                boxShadow="lg"
                borderRadius="xl"
                p={6}
                bg={bubbleColor}
                display="flex"
                alignItems="center"
                mb={1}
                width="90%"
            >
                <Avatar src={`https://robohash.org/${userName}`} size="lg" mr={4} />
                <Box flex="1">
                    <form onSubmit={handleSubmit}>
                        <Input
                            placeholder="Username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            mb={2}
                        />
                        <Input
                            placeholder="Comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            mb={2}
                        />
                        <Button type="submit" colorScheme="blue" isLoading={loading}>
                            Submit
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    );
}
