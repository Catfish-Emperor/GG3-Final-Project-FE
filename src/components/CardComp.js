import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Stack, Heading, Flex, useColorModeValue, Image, Spinner } from '@chakra-ui/react';
import { useFetchData } from '../hooks/useFetchData'; 
import { backendPort } from '../config';

export default function CardComp() {
    const PORT = backendPort;

    const { data, loading } = useFetchData(`${PORT}`);
    const videos = data.videos

    const bgColor = useColorModeValue('blue.100', 'gray.700');

    if (loading) {
        return (
        <Flex wrap='wrap' justify='center' paddingTop={8}>
        <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        />
        </Flex>
        );
    }

    const card = videos.map((v) => (
        <Link to={`/${v.videoId}`} key={v.videoId}>
        <Card
            key={v.videoId}
            maxW='sm'
            variant='filled'
            bg={bgColor}
            wordBreak='break-word'
            transition='transform 0.3s'
            _hover={{ transform: 'scale(1.05)' }}
        >
            <CardBody>
            <Image src={`${v.imageThumbnailUrl}`} alt='Video thumbnail' />
            <Stack mt='3' spacing='1'>
                <Heading size='sm'>{v.videoTitle}</Heading>
            </Stack>
            </CardBody>
        </Card>
        </Link>
    ));

    return (
        <Flex wrap='wrap' justify='flex-start' gap='8' margin='5'>
        {card}
        </Flex>
    );
}
