import { Button, Box, Center, Input, useToast } from '@chakra-ui/react';
import axios from "axios";
import React from 'react';
import { useRouter } from 'next/router';

export default function Main() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const toast = useToast();
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
        email,
        password,
      });
      router.replace('/map');
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
    <Center pt="300px">
      <Box>
        <Input
          type="email"
          placeholder="Email"
          mb="3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          mb="3"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <Button type="button" onClick={handleSubmit}>Submit</Button>
      </Box>
    </Center>
  );
}
