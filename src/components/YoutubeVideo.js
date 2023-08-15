import { Box, Flex, useColorModeValue, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useFetchData } from '../hooks/useFetchData'; 
import { backendPort } from '../config';

export default function YoutubeVideo() {
    const { id } = useParams();
    const PORT = backendPort;

    const { data, loading } = useFetchData(`${PORT}/video/${id}`);

    const bgColor = useColorModeValue('blue.100', 'gray.700');
    const video = data.video

    if (loading) {
        return (
        <Flex marginTop={5} justifyContent="center" alignItems="center">
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

    return (
        <Flex marginTop={5} justifyContent="center" alignItems="center">
            <Box boxShadow="lg" borderRadius="xl" p={6} bg={bgColor}>
                <iframe
                    width="800"
                    height="450"
                    src={`${video[0].videoUrl}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </Box>
        </Flex>
    );
}
