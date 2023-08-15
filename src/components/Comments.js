import React from 'react';
import { Box, Flex, Avatar, useColorModeValue, Text, Stack, Skeleton } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useFetchData } from '../hooks/useFetchData'; 
import { backendPort } from '../config';

export default function Comments() {
  const { id } = useParams();
  const bubbleColor = useColorModeValue('blue.100', 'gray.700');
  const PORT = backendPort;

  const { data, loading } = useFetchData(`${PORT}/comment/${id}`);
  const comments = data.comments

  if (loading) {
    return (
      <Flex direction="column" alignItems="center" py={10}>
        <Stack>
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        </Stack>
      </Flex>
    );
  }

  const commentsMap = comments.map((c) => (
    <Box
      boxShadow="lg"
      borderRadius="xl"
      p={3}
      bg={bubbleColor}
      display="flex"
      alignItems="center"
      mb={3}
      width={'90%'}
    >
      <Avatar src={`https://robohash.org/${c.userName}`} size="lg" mr={4} />
      <Box flex="1">
        <Text as='b'>{c.userName}</Text>
        <p>{c.comment}</p>
      </Box>
    </Box>
  ));

  return (
    <Flex direction="column" alignItems="center" py={10}>
      {commentsMap}
    </Flex>
  );
}
