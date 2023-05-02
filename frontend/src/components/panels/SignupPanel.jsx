import { Button, Box, Center, Input, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useRouter } from 'next/router';

export default function Main() {
  const [registerUsers, setRegisterUsers] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const toast = useToast();
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      if (registerUsers.password?.length && registerUsers.password === registerUsers.confirmPassword) {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/signup`, registerUsers);
        router.replace('/map');
      } else {
        toast({
          position: 'top',
          title: 'Password & confirm password do not match',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        position: 'top',
        title: error.message,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

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
        <Button type="button" onClick={handleSubmit}>Submit</Button>
      </Box>
    </Center>
  );
}
