import { Button, Box, Center, Input, useToast } from '@chakra-ui/react';
import React from 'react';
import axios from 'axios'

export default function Main() {
    const [registerUsers, setRegisterUsers] = React.useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const toast = useToast()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/users/signup', registerUsers);
            toast({
                position: 'top',
                title: "Successfully Submitted!",
                status: 'success',
                duration: 2000,
                isClosable: true,
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
        <Center pt="200px">
            <Box>
                <Input type='name' placeholder="Name" mb="3" value={registerUsers.name} onChange={(e) => setRegisterUsers({
                    ...registerUsers,
                    name: e.target.value,
                })} />
                <Input type='email' placeholder="Email" mb="3" value={registerUsers.email} onChange={(e) => setRegisterUsers({
                    ...registerUsers,
                    email: e.target.value,
                })} />
                <Input type='password' placeholder="Password" mb="3" value={registerUsers.password} onChange={(e) => setRegisterUsers({
                    ...registerUsers,
                    password: e.target.value,
                })} />
                <Input type='password' placeholder="Confirm Password" mb="3" value={registerUsers.confirmPassword} onChange={(e) => setRegisterUsers({
                    ...registerUsers,
                    confirmPassword: e.target.value,
                })} />
                <Button onClick={handleSubmit}>Submit</Button>
            </Box>
        </Center>
    );
}
