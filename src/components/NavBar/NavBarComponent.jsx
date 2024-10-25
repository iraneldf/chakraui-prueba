'use client'
import {
    Box,
    Flex,
    Icon,
    IconButton,
    useDisclosure,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    HStack, Input, Group
} from "@chakra-ui/react";
import {BreadcrumbCurrentLink, BreadcrumbRoot} from "@/components/ui/breadcrumb";
import {SlGlobe, SlSettings} from "react-icons/sl";
import {Avatar} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function NavBarComponent() {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            height={"85px"}
            bg="white" // Cambiado a blanco
        >
            <BreadcrumbRoot ml={"20px"}>
                <BreadcrumbLink color={"#718096"}>Orders</BreadcrumbLink>
                <BreadcrumbLink color={"#2D3748"} fontWeight={"400"}>Orders</BreadcrumbLink>
            </BreadcrumbRoot>

            <Box mr={"20px"} display={{base: 'none', md: 'block'}}>

                <HStack gap={'40px'}>
                    <Group color={'#A0AEC0'} attached>
                        <Input borderRadius={'20px'} borderInlineEndWidth='0px' placeholder="Find Client"/>
                        <Button borderRadius={'20px'} borderInlineStartWidth="0px" variant="outline">
                            <Image
                                src={'/assets/icons/lupa.png'}
                                width={16}
                                height={16}
                                alt={'SearchIcon'}/>
                        </Button>
                    </Group>


                    <HStack gap={"10px"}>
                        <IconButton color={"#68CCE0"} aria-label="Call support" variant={"subtle"} rounded="full">
                            <SlGlobe/>
                        </IconButton>
                        <IconButton color={"#718EBF"} aria-label="Call support" variant={"subtle"} rounded="full">
                            <SlSettings/>
                        </IconButton>
                        <Avatar ml={'10px'} name="Oshigaki Kisame" src="/assets/images/avatar.png"/>
                    </HStack>
                </HStack>

            </Box>


            <IconButton
                icon={<Icon name="menu"/>}
                aria-label="Open Menu"
                display={{base: 'inline-flex', md: 'none'}}
                onClick={onOpen}
            />
        </Flex>
    );
}
