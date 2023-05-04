import * as React from 'react';
import {
  Flex, Box, Text, Input, Button, Center, useToast,
} from '@chakra-ui/react';
import html2canvas from 'html2canvas';

const multiplier = 10;

export default function PlotBoxModel() {
  const [width1, setWidth1] = React.useState(1620);
  const [width2, setWidth2] = React.useState(100);
  const [width3, setWidth3] = React.useState(200);
  const [width4, setWidth4] = React.useState(20);
  const [responsiveWidth, setResponsiveWidth] = React.useState({
    width1: 1620,
    width2: 100,
    width3: 200,
    width4: 20,
  });

  const [height1, setHeight1] = React.useState(5);
  const [height2, setHeight2] = React.useState(5);
  const [height3, setHeight3] = React.useState(20);
  const [height4, setHeight4] = React.useState(100);
  const [responsiveHeight, setResponsiveHeight] = React.useState({
    height1: 5,
    height2: 5,
    height3: 20,
    height4: 100,
  });

  const [changeColor1, setChangeColor1] = React.useState(2);
  const [changeColor2, setChangeColor2] = React.useState(3);
  const [changeColor3, setChangeColor3] = React.useState(5);
  const [changeColor4, setChangeColor4] = React.useState(1);

  const [rechargeNum, setRechargeNum] = React.useState(120);
  const toast = useToast();

  const handleAccept = () => {
    try {
      if ((Number(width1) + Number(width2) + Number(width3) + Number(width4)) > 1940) {
        toast({
          position: 'top',
          title: 'Sum exceeded upto 1940, please enter correct value!',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      } else {
        setResponsiveWidth({
          width1: Number(width1),
          width2: Number(width2),
          width3: Number(width3),
          width4: Number(width4),
        });
        setResponsiveHeight({
          height1: Number(height1),
          height2: Number(height2),
          height3: Number(height3),
          height4: Number(height4),
        });
        toast({
          position: 'top',
          title: 'Successfully Accepted',
          status: 'success',
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
    <>
      <Box id="capture-area" overflow="auto" bgColor="white">
        <Flex>
          <Box w="13%">
            <Flex direction={'column'} mt='88%'>
              <Input variant='flushed' p={1} type='number' width={'30%'} mt={2} ml={15} value={height1} onChange={(e) => setHeight1(e.target.value)} />
              <Input variant='flushed' p={1} type='number' width={'30%'} mt={14} ml={15} value={height2} onChange={(e) => setHeight2(e.target.value)} />
              <Input variant='flushed' p={1} type='number' width={'30%'} mt={12} ml={15} value={height3} onChange={(e) => setHeight3(e.target.value)} />
              <Input variant='flushed' p={1} type='number' width={'30%'} mt={12} ml={15} value={height4} onChange={(e) => setHeight4(e.target.value)} />
            </Flex>
          </Box>

          <Box w="75%" mt="2%">
            <Box>
              <Flex>
                <Input variant='flushed' p={1} type='number' width={'21%'} ml={3} value={width1} onChange={(e) => setWidth1(e.target.value)} />
                <Input variant='flushed' p={1} type='number' width={'15%'} ml={3} value={width2} onChange={(e) => setWidth2(e.target.value)} />
                <Input variant='flushed' p={1} type='number' width={'32%'} ml={3} value={width3} onChange={(e) => setWidth3(e.target.value)} />
                <Input variant='flushed' p={1} type='number' width={'7%'} ml={3} value={width4} onChange={(e) => setWidth4(e.target.value)} />
              </Flex>
            </Box>

            <Box
              position={'relative'}
              mt='7%'
              minHeight={`${(responsiveHeight.height1 + responsiveHeight.height2 + responsiveHeight.height3) * multiplier + responsiveHeight.height4}px`}
              minWidth="4000px"
            >
              <Box
                height={`${responsiveHeight.height4}px`}
                width="3880px"
                bg="black"
                position="absolute"
                top={`${(responsiveHeight.height1 + responsiveHeight.height2 + responsiveHeight.height3) * multiplier}px`}
                left="0"
              />

              <Box
                height={`${(responsiveHeight.height1 + responsiveHeight.height2 + responsiveHeight.height3) * multiplier}px`}
                width="3880px"
                bg="red"
                position="absolute"
                top="0"
                left="0"
              />

              <Box
                height={`${(responsiveHeight.height1 + responsiveHeight.height2) * multiplier}px`}
                width={`${(responsiveWidth.width2 + responsiveWidth.width3) * 2 + responsiveWidth.width4}px`}
                bg="#76E4F7"
                position="absolute"
                top="0"
                left={`${responsiveWidth.width1}px`}
              />

              <Box
                height={`${responsiveHeight.height1 * multiplier}px`}
                width={`${responsiveWidth.width3 * 2 + responsiveWidth.width4}px`}
                bg="#F6E05E"
                position="absolute"
                top="0"
                left={`${responsiveWidth.width1 + responsiveWidth.width2}px`}
              />

              <Box
                height={`${(responsiveHeight.height1 - 1) * multiplier}px`}
                width={`${responsiveWidth.width4}px`}
                bg="white"
                position="absolute"
                top="0"
                left={`${responsiveWidth.width1 + responsiveWidth.width2 + responsiveWidth.width3}px`}
              />
            </Box>
          </Box>
        </Flex>

        <Box mt="10" ml={32} width={'80%'}>
          <Text fontSize='md' ml={180}>K(m/s)</Text>
          <Flex>
            <Box mt={2}>
              <Box bg='#F6E05E' w={180} h={35} >
              </Box>
              <Box bg='#76E4F7' w={180} h={35} >
              </Box>
              <Box bg='red' w={180} h={35} >
              </Box>
              <Box bg='black' w={180} h={35} >
              </Box>
            </Box>
            <Flex direction={'column'}>
              <Text fontSize='md' ml={2}><Input variant='flushed' type='number' width={'15%'} value={changeColor1} onChange={(e) => setChangeColor1(e.target.value)} /> x10^-07</Text>
              <Text fontSize='md' ml={2}><Input variant='flushed' type='number' width={'15%'} value={changeColor2} onChange={(e) => setChangeColor2(e.target.value)} /> x10^-05</Text>
              <Text fontSize='md' ml={2}><Input variant='flushed' type='number' width={'15%'} value={changeColor3} onChange={(e) => setChangeColor3(e.target.value)} /> x10^-07</Text>
              <Text fontSize='md' ml={2}><Input variant='flushed' type='number' width={'15%'} value={changeColor4} onChange={(e) => setChangeColor4(e.target.value)} /> x10^-07</Text>
            </Flex>
            <Text fontSize='md' mx={'auto'}>Recharge(mm/ar) <Input variant='flushed' p={1} type='number' width={'30%'} value={rechargeNum} onChange={(e) => setRechargeNum(e.target.value)} />
            </Text>
          </Flex>
        </Box>
      </Box>
      <Center gap={4} mt={3}>
        <Button colorScheme='teal' onClick={handleAccept}>Accept</Button>
        <Button colorScheme='teal' onClick={() => captureScreen()}>ScreenShot</Button>
      </Center>
    </>
  );
}

function captureScreen() {
  const captureArea = document.getElementById('capture-area');

  captureArea.style.setProperty('overflow', 'visible');
  html2canvas(captureArea, { quality: 1, backgroundColor: 'white', width: captureArea.scrollWidth }).then((canvas) => {
    captureArea.style.setProperty('overflow', 'auto');

    const link = document.createElement('a');
    link.download = 'screenshot.jpg';
    link.href = canvas.toDataURL('image/jpeg');
    link.click();
  });
}
