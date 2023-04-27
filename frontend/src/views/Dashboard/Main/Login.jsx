import { Button, Box, Center, Input } from '@chakra-ui/react';
import React from 'react';

export default function Main() {
    return (
        <Center pt="300px">
            <Box>
                <Input placeholder="Usernmae" mb="3" />
                <Input placeholder="Password" mb="3" />
                <Button>Submit</Button>
            </Box>
        </Center>
    );
}
