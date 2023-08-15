import React from 'react';
import {Flex, Box, Image, useColorModeValue, Icon, chakra, Tooltip, Spinner} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { useFetchData } from '../hooks/useFetchData'; 
import { backendPort } from '../config';

export default function Products() {
    const { id } = useParams();
    const PORT = backendPort;


    const { data, loading } = useFetchData(`${PORT}/product/${id}`);

    const bgColor = useColorModeValue('blue.100', 'gray.700');
    const textColor = useColorModeValue('gray.800', 'white');
    const products = data.products

    if (loading) {
        return (
        <Flex p={4} w="full" alignItems="center" justifyContent="center" gap={2}>
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

    const productsMap = products.map((p) => (
        <Box
        key={p.id}
        bg={bgColor}
        maxW="xs"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        >
        <Image
            src={`${p.productImg}`}
            alt={`Picture of ${p.title}`}
            roundedTop="lg"
            width="200px"
            height="175px"
        />

        <Box p="2">
            <Flex justifyContent="space-between" alignContent="center">
            <Box
                fontSize="md"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                wordBreak="break-word"
                maxH="300px"
                maxW="150px"
            >
                {p.title}
            </Box>
            <Tooltip
                label="Shop now"
                bg="white"
                placement="top"
                color="gray.800"
                fontSize="1.2em"
            >
                <chakra.a href={p.productLink} display="flex">
                <Icon as={FiShoppingCart} h={5} w={5} alignSelf="center" />
                </chakra.a>
            </Tooltip>
            </Flex>

            <Flex justifyContent="flex-start" alignContent="center">
            <Box fontSize="md" color={textColor}>
                {p.price}
            </Box>
            </Flex>
        </Box>
        </Box>
    ));

    return (
        <Flex p={4} w="full" alignItems="center" justifyContent="center" gap={2}>
        {productsMap}
        </Flex>
    );
}
