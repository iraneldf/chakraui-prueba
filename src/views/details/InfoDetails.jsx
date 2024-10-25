'use client'
import {Box, Flex, HStack, Text, Textarea, VStack} from "@chakra-ui/react";
import Title from "@/components/title";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import MapaComponentMini from "@/components/home/MapaComponentMini";

export default function InfoDetails() {
    const [textAreavalue, setTextAreavalue] = useState('Calle 5 e/ 25 y 36 Siboney Playa #4578')
    return (
        <Flex gap={'40px'} w={'100%'} h={'521px'}>
            {/*cuadro 1.1*/}
            <Flex
                direction={'column'}
                gap={'5px'}
                bg={'#FFFFFF'}
                boxShadow={'0px 5px 80px 0px #7272720D'}
                py={'30px'}
                px={'35px'}
                borderRadius='20px'
                flex={'3'}>

                <Title title='Order User' subTitle='User creating the order'/>

                <Flex direction={'column'} gap={'0px'} py={'10px'}>

                    <VStack align='start' py={'10px'} gap={'10px'}>
                        <Text color={'#737791'}>Username</Text>
                        <Box color={'#2D3748'} lineHeight={'19.36px'} h={'40px'} display={'flex'}
                             alignItems={'center'} w={'100%'} borderWidth={'1px'}
                             px={'16px'} borderRadius={'4px'}>rolando</Box>
                    </VStack>

                    <HStack justifyContent='space-between' gap={'20px'}>

                        <VStack align={'start'} w={'100%'} gap={'10px'} py={'10px'}>
                            <Text color={'#737791'}>Firstname</Text>
                            <Box color={'#2D3748'} lineHeight={'19.36px'} h={'40px'} display={'flex'}
                                 alignItems={'center'} w={'100%'} borderWidth={'1px'}
                                 px={'16px'} borderRadius={'4px'}> Rolando </Box>
                        </VStack>

                        <VStack align={'start'} w={'100%'} gap={'10px'} py={'10px'}>
                            <Text color={'#737791'}>Lastname</Text>
                            <Box color={'#2D3748'} lineHeight={'19.36px'} h={'40px'} display={'flex'}
                                 alignItems={'center'} w={'100%'} borderWidth={'1px'}
                                 px={'16px'} borderRadius={'4px'}>Fonseca
                                Martines </Box>
                        </VStack>

                    </HStack>

                    <VStack align='start' py={'10px'} gap={'10px'}>
                        <Text color={'#737791'}>Identity Card</Text>
                        <Box color={'#2D3748'} lineHeight={'19.36px'} h={'40px'} display={'flex'}
                             alignItems={'center'} w={'100%'} borderWidth={'1px'}
                             px={'16px'} borderRadius={'4px'}>8502034587</Box>
                    </VStack>

                    <HStack justifyContent='space-between' gap={'20px'}>

                        <VStack align={'start'} w={'100%'} gap={'10px'} py={'10px'}>
                            <Text color={'#737791'}>Phone Number</Text>
                            <Box color={'#2D3748'} lineHeight={'19.36px'} h={'40px'} display={'flex'}
                                 alignItems={'center'} w={'100%'} borderWidth={'1px'}
                                 px={'16px'} borderRadius={'4px'}> +5357412369 </Box>
                        </VStack>

                        <VStack align={'start'} w={'100%'} gap={'10px'} py={'10px'}>
                            <Text color={'#737791'}>Email</Text>
                            <Box color={'#2D3748'} lineHeight={'19.36px'} h={'40px'} display={'flex'}
                                 alignItems={'center'} w={'100%'} borderWidth={'1px'}
                                 px={'16px'} borderRadius={'4px'}>rolando@gmail.com</Box>
                        </VStack>

                    </HStack>


                </Flex>

            </Flex>
            {/*cuadro 1.2*/}
            <Flex
                direction={'column'}
                gap={'5px'}
                bg={'#FFFFFF'}
                boxShadow={'0px 5px 80px 0px #7272720D'}
                py={'30px'}
                px={'35px'}
                borderRadius='20px'
                flex={'1'}>

                <HStack justifyContent='space-between' gap={'0px'}>
                    <Title title='Shipping Address' subTitle='Order Shipping Address'/>
                    <Button borderRadius={'16px'} px={'16px'} bg={'#FF7500'}>Assign</Button>
                </HStack>

                <Flex direction={'column'} gap={'20px'} py={'10px'}>
                    {/*todo mapa*/}
                    <Box w={'428px'} h={'282px'}>
                        <MapaComponentMini/>
                    </Box>
                    <Textarea
                        lineHeight={'20px'}
                        borderWidth={'1px'}
                        borderColor={'#E2E8F0'}
                        color={'#0000005C'}
                        value={textAreavalue}
                        resize="vertical" // Permite el redimensionamiento vertical
                        h={'80px'}
                        onChange={t => setTextAreavalue(t.value)} // Corrige 'onChage' a 'onChange'
                        maxHeight="120px" // Establece un límite máximo de altura
                    />

                </Flex>

            </Flex>


        </Flex>
    )
}
