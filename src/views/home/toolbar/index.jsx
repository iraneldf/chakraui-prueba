import React from 'react'
import BadgesRow from './BadgesRow'
import {Box, Flex, Group, Icon, IconButton} from '@chakra-ui/react'
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Avatar} from "@/components/ui/avatar";
import MyIcon from "../../../../public/assets/icons/left-icon.png"
import ButtonsGroup from "@/views/home/toolbar/ButtonsGroup";

const ToolBar = () => {
    return (
        <Flex
            width={'100%'}
            display={'flex'}
            alignItems={'center'}
            justifyContent='flex-end'
            gap={'10px'}
        >

            <BadgesRow/>

            <ButtonsGroup/>

        </Flex>
    )
}

export default ToolBar
