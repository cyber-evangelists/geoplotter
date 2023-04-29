import { Button, Box, Center, Input, useToast } from '@chakra-ui/react';
import React from 'react';
import axios from "axios";

export default function Main() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const toast = useToast()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/users/login', {
                email,
                password,
            });

            console.log(data);
        } catch (error) {
            toast({
                position: 'top',
                title: error.message,
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
        }
    }
    return (
        <Center pt="300px">
            <Box>
                <Input placeholder="Email" mb="3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Password" mb="3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={handleSubmit}>Submit</Button>
            </Box>
        </Center>
    );
}
