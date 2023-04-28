import * as React from 'react'
import { Flex, Box, Text, Input, Button, Center ,useToast, Wrap, WrapItem} from '@chakra-ui/react';

function PlotBoxModel() {
    const [column1, setColumn1] = React.useState(1620);
    const [column2, setColumn2] = React.useState(100);
    const [column3, setColumn3] = React.useState(200);
    const [column4, setColumn4] = React.useState(20);

    const [row1, setRow1] = React.useState(5);
    const [row2, setRow2] = React.useState(5);
    const [row3, setRow3] = React.useState(20);
    const [row4, setRow4] = React.useState(100);

    const toast = useToast()
    const statuses = ['success', 'error']

    const handleAccept = (e) => {
        e.preventDefaut();
        try {

        } catch (error) {
            console.log('ERROR = ', error)
        }
    }
    return (
        <>
            <Wrap>
                {statuses.map((items, i) => (
                    <WrapItem key={i}>
                        <Button
                            onClick={() =>
                                toast({
                                    title: "Sum exceeded upto 1940, please enter correct value!",
                                    status: items,
                                    isClosable: true,
                                })
                            }
                        >
                            Show {items} toast
                        </Button>
                    </WrapItem>
                ))}
            </Wrap>
            <Flex>
                <Box w="13%">
                    <Flex direction={'column'} mt='88%'>
                        <Input variant='flushed' p={1} type='number' width={'30%'} mt={2} value={row1} onChange={(e) => setRow1(e.target.value)} />
                        <Input variant='flushed' p={1} type='number' width={'30%'} mt={14} value={row2} onChange={(e) => setRow2(e.target.value)} />
                        <Input variant='flushed' p={1} type='number' width={'30%'} mt={12} value={row3} onChange={(e) => setRow3(e.target.value)} />
                        <Input variant='flushed' p={1} type='number' width={'30%'} mt={12} value={row4} onChange={(e) => setRow4(e.target.value)} />
                    </Flex>
                </Box>

                <Box w="75%" mt="2%">
                    <Box>
                        <Flex>
                            <Input variant='flushed' p={1} type='number' width={'19%'} ml={2} value={column1} onChange={(e) => setColumn1(e.target.value)} />
                            <Input variant='flushed' p={1} type='number' width={'13%'} ml={2} value={column2} onChange={(e) => setColumn2(e.target.value)} />
                            <Input variant='flushed' p={1} type='number' width={'29%'} ml={2} value={column3} onChange={(e) => setColumn3(e.target.value)} />
                            <Input variant='flushed' p={1} type='number' width={'7%'} ml={2} value={column4} onChange={(e) => setColumn4(e.target.value)} />
                        </Flex>
                    </Box>
                    <Flex mt='7%'>
                        <Box bg='red' w={410} h={190} >
                        </Box>
                        <Box bg='#81E6D9' w={280} h={190} >
                        </Box>

                        <Flex direction="column">
                            <Box bg='#F6E05E' w={500} h={100} >
                                <Box bg='#FFFFFF' mx={'auto'} w={10} h={16} >
                                </Box>
                            </Box>
                            <Box bg='#81E6D9' w={500} h={90} >
                            </Box>
                        </Flex>

                    </Flex>

                    <Box bg='red' w='100%' h={70} >
                    </Box>
                    <Box bg='black' w='100%' h={70} >
                    </Box>
                </Box>
            </Flex>

            <Box mt={20} ml={32}>
                <Text fontSize='md' ml={180}>K(m/s)</Text>
                <Flex>
                    <Box>
                        <Box bg='#F6E05E' w={180} h={35} >
                        </Box>
                        <Box bg='#81E6D9' w={180} h={35} >
                        </Box>
                        <Box bg='red' w={180} h={35} >
                        </Box>
                        <Box bg='black' w={180} h={35} >
                        </Box>
                    </Box>
                    <Flex direction={'column'}>
                        <Text fontSize='md' p={1.5} ml={2}>2x10^-07</Text>
                        <Text fontSize='md' p={1.5} ml={2}>3x10^-05</Text>
                        <Text fontSize='md' p={1.5} ml={2}>5x10^-07</Text>
                        <Text fontSize='md' p={1.5} ml={2}>1x10^-07</Text>
                    </Flex>
                    <Text fontSize='md' mx={'auto'}>Recharge(mm/ar) 120</Text>
                </Flex>
            </Box>
            <Center>
                <Button colorScheme='green' onClick={handleAccept}>Accept</Button>
            </Center>
        </>
    )
}
export default PlotBoxModel;