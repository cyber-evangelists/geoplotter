import { Button, Box, Center, Input } from '@chakra-ui/react';
import React from 'react';

export default function Main() {
    return (
        <Center pt="300px">
            <Box>
                <Box mb="20px">
                    <Button>Accept</Button>
                </Box>
                <Box>
                    <Button>Accept- Box Model</Button>
                </Box>
            </Box>
        </Center>
    );
}
