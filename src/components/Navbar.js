import React from 'react';
import {
Box,
Flex,
Avatar,
HStack,
IconButton,
Button,
Menu,
MenuButton,
MenuList,
MenuItem,
MenuDivider,
useDisclosure,
useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher'; 
import { Link } from 'react-router-dom'; 

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('blue.100', 'gray.700')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>GIGIH 3.0 Final Project</Box>
            <Link to="/">Home</Link> 
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Guest</MenuItem>
                <MenuDivider />
                <MenuItem>--</MenuItem>
              </MenuList>
            </Menu>
            <ColorModeSwitcher ml={4} /> 
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
