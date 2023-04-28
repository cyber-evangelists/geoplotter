import { Button, Box, Center, Input } from '@chakra-ui/react';
import React from 'react';
import axios from "axios";

export default function Main() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/users/login', {
                username,
                password,
            });

            console.log(data);
        } catch (error) {
            console.log('ERROR == ', error)
        }
    }
    return (
        <Center pt="300px">
            <Box>
                <Input placeholder="Username" mb="3"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <Input placeholder="Password" mb="3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={handleSubmit}>Submit</Button>
            </Box>
        </Center>
    );
}
