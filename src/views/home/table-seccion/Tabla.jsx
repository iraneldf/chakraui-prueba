'use client'
import {Box, Flex, Group, HStack, Input, Stack, Table, Text, VStack} from "@chakra-ui/react"
import {GoArrowLeft, GoArrowRight} from "react-icons/go";
import {
    PaginationItems, PaginationNextTrigger, PaginationPrevTrigger, PaginationRoot
} from "@/components/ui/pagination";
import {Button} from "@/components/ui/button";

import Title from "@/components/title";
import SelectButton from "@/views/home/table-seccion/table-selec-button";
import {Field} from "@/components/ui/field";
import {useMyContext} from "@/context/ShowMapContext";
import {Avatar} from "@/components/ui/avatar";
import dynamic from 'next/dynamic'; // Importa dynamic

// Carga dinámica del componente MapaComponent
const MapaComponent = dynamic(() => import('@/components/home/MapaComponent'), {ssr: false});


const Tabla = () => {

    const {showMap} = useMyContext();

    return (<Box bg={'#FFFFFF'} boxShadow="0px 5px 80px 0px #7272720D" borderRadius={'20px'} py={'30px'} px={'35px'}>

        <Flex direction="column" gap={'5px'}>

            <HStack justifyContent='space-between'>
                <Title title='Orders' subTitle='Assignments to messengers'/>

                <Group w={'452px'} color={'#A0AEC0'} attached>
                    <Input lineHeight='19.36px' type={'text'} defaultValue={'1/6/2024'} borderRadius={'4px'}
                           px={'16px'}
                           borderWidth={'1px'}
                           borderColor={'#E2E8F0'}/>

                    <Input lineHeight='19.36px' type={'date'} defaultValue="2024-07-06" borderRadius={'4px'}
                           px={'16px'}
                           borderWidth={'1px'}
                           borderColor={'#E2E8F0'}/>
                </Group>
            </HStack>


            <Box display={!showMap ? 'none' : 'block'} py={'10px'}>
                <MapaComponent/>
            </Box>

            <Flex display={showMap ? 'none' : 'block'} direction="column" gap={'20px'} py={'10px'}>
                <Flex justify="space-between">
                    <HStack gap={'10px'} px={'12px'}>
                        <SelectButton/> <Text color={'#737791'}>Entries per page</Text>
                    </HStack>

                    <HStack gap={'10px'} px={'12px'}>
                        <Text color={'#737791'}>Search</Text>
                        <Field w={'222px'}>
                            <Input w={'222px'}/>
                        </Field>
                    </HStack>

                </Flex>

                <Box p={'12px'} borderRadius={'12px'}>

                    <Table.Root size="md" interactive>
                        <Table.Header>

                            <Table.Row>
                                <Table.ColumnHeader borderColor={'#FFFFFF'} letterSpacing="0.05em"
                                                    fontSize={"12px"}
                                                    fontWeight={"700"}
                                                    color={"#4A5568"}>ORDER
                                    ID</Table.ColumnHeader>
                                <Table.ColumnHeader borderColor={'#FFFFFF'} letterSpacing="0.05em"
                                                    fontSize={"12px"}
                                                    fontWeight={"700"}
                                                    color={"#4A5568"}>NAME</Table.ColumnHeader>
                                <Table.ColumnHeader borderColor={'#FFFFFF'} letterSpacing="0.05em"
                                                    fontSize={"12px"}
                                                    fontWeight={"700"}
                                                    color={"#4A5568"}>PRODUCTS</Table.ColumnHeader>
                                <Table.ColumnHeader borderColor={'#FFFFFF'} letterSpacing="0.05em"
                                                    fontSize={"12px"}
                                                    fontWeight={"700"}
                                                    color={"#4A5568"}>EMAIL/PHONE</Table.ColumnHeader>
                                <Table.ColumnHeader borderColor={'#FFFFFF'} letterSpacing="0.05em"
                                                    fontSize={"12px"}
                                                    fontWeight={"700"}
                                                    color={"#4A5568"}>Status</Table.ColumnHeader>
                                <Table.ColumnHeader borderColor={'#FFFFFF'} letterSpacing="0.05em"
                                                    textAlign="end"></Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {items.map((item, index) => (

                                <Table.Row lineHeight={'20px'} color={'#718096'}
                                           bg={index % 2 === 0 ? '#EDF2F7' : 'white'} key={item.id}>
                                    <Table.Cell whiteSpace="wrap"
                                                borderColor={'#FFFFFF'}>{item.id}</Table.Cell>
                                    <Table.Cell borderColor={'#FFFFFF'}>
                                        <HStack gap={'8px'}>
                                            <Avatar ml={'10px'} name="Oshigaki Kisame"
                                                    src={item.avatar}/>
                                            {item.name}
                                        </HStack>
                                    </Table.Cell>
                                    <Table.Cell w={'176.67px'} borderColor={'#FFFFFF'}>{item.category}</Table.Cell>
                                    <Table.Cell w={'176.67px'} borderColor={'#FFFFFF'}>{item.email}</Table.Cell>
                                    <Table.Cell borderColor={'#FFFFFF'}>{item.price}</Table.Cell>

                                    <Table.Cell borderColor={'#FFFFFF'} textAlign="end">
                                        <Button px={'8px'} fontSize={'12px'} w={'56px'} h={'24px'}
                                                bg={"#FF7500"}
                                                borderRadius={"16px"}
                                        >
                                            Assign
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>))}
                        </Table.Body>
                    </Table.Root>
                </Box>

                <PaginationRoot w={"100%"} count={6} pageSize={2} defaultPage={1} siblingCount={3}>
                    <Flex direction="row" gap={"300px"} alignItems="center" justifyContent="space-between">
                        <HStack color={"#FF750080"}>
                            <GoArrowLeft/>
                            <Text fontFamily={"lato"}
                                  aling-selft={'start'}>Preview</Text>
                        </HStack>

                        <Flex direction="row" gap={"5px"} alignItems="center">
                            <Button color={'#FFFFFF'} bg={'#FF7500'}>1</Button>
                            <Button bg={'#FFFFFF'} color={'#FF7500'}>2</Button>
                            <Button bg={'#FFFFFF'} color={'#FF7500'}>3</Button>
                        </Flex>

                        <HStack color={"#FF7500"}>
                            <Text fontFamily={"Late, san-serif"}>Next</Text>
                            <GoArrowRight/>
                        </HStack>

                    </Flex>
                </PaginationRoot>

            </Flex>


        </Flex>

    </Box>)
}


const items = [{
    id: 'O-4516',
    name: "Segun Adebayo",
    category: "REDMI 12 C 4/64G\n"
        + "COLCHON FULL CAMERO",
    email: 'sage@gmail.com +53 5 784 45 12',
    price: 'PENDING',
    avatar: '/assets/images/avatar-5.svg'
}, {
    id: 'O-4517',
    name: "Mark Chandler",
    category: "BOMBA DE AGUA ",
    email: 'mark@gmail.com',
    price: 'Transporting',
    avatar: '/assets/images/Avatar-default.svg'
}, {
    id: 'O-4518',
    name: "Lazar Nikolov",
    category: "OLLA REINA ROYAL 6L",
    email: 'lazar@gmail.com',
    price: 'Packaging',
    avatar: '/assets/images/Avatar-default.svg'
}, {
    id: 'O-4519',
    name: "Javier Alaves",
    category: "CAFETERA ELÉCTRICA ROYAL",
    email: '+53 5 365 41 84',
    price: 'Delivered',
    avatar: '/assets/images/avatar-4.svg'
}, {
    id: 'O-4520',
    name: "Lazar Nikolov",
    category: "OLLA REINA ROYAL 6L",
    email: 'lazar@gmail.com',
    price: 'Canceled',
    avatar: '/assets/images/Avatar-default.svg'
},]
export default Tabla;