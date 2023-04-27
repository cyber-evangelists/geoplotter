import { Button, Box, Center, Input } from '@chakra-ui/react';
import React from 'react';

export default function Main() {
    return (
        <Center pt="200px">
            <Box>
                <Input placeholder="First Name" mb="3" />
                <Input placeholder="Second Name" mb="3" />
                <Input placeholder="Email Id" mb="3" />
                <Input placeholder="Company Name" mb="3" />
                <Input placeholder="Organization number" mb="3" />
                <Button>Submit</Button>
            </Box>
        </Center>
    );
}
