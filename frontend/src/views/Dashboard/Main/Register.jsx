import { Button, Box, Center, Input, useToast } from '@chakra-ui/react';
import React from 'react';

export default function Main() {
    const [registerUsers, setRegisterUsers] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        organizationNumber: '',
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
                <Input placeholder="First Name" mb="3" value={registerUsers.firstName} onChange={(e) => setRegisterUsers({
                    ...registerUsers,
                    firstName: e.target.value,
                })} />
                <Input placeholder="Second Name" mb="3" value={registerUsers.lastName} onChange={(e) => setRegisterUsers({
                    ...registerUsers,
                    lastName: e.target.value,
                })} />
                <Input placeholder="Email Id" mb="3" value={registerUsers.email} onChange={(e) => setRegisterUsers({
                    ...registerUsers,
                    email: e.target.value,
                })} />
                <Input placeholder="Company Name" mb="3" value={registerUsers.companyName} onChange={(e) => setRegisterUsers({
                    ...registerUsers,
                    companyName: e.target.value,
                })} />
                <Input placeholder="Organization number" mb="3" value={registerUsers.organizationNumber} onChange={(e) => setRegisterUsers({
                    ...registerUsers,
                    organizationNumber: e.target.value,
                })} />
                <Button onClick={handleSubmit}>Submit</Button>
            </Box>
        </Center>
    );
}
