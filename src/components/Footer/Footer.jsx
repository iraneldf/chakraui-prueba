'use client'


import {Box, Center, Link, Text} from "@chakra-ui/react";

export default function FooterComponent() {


    return (
        <Center w={'100%'} bg={"#F9FAFB"} p={'10px'}>
            <Text fontSize={'12px'} lineHeight={'18px'} color={'#737791'}>© 2024 VoyPati Made by</Text>
            <Link fontSize={'12px'} lineHeight={'18px'} color={'#737791'} textDecoration="underline"
                  href={'https://noxcreation.dev/es'}>NOX Creation</Link>
        </Center>
    )
};
