'use client'
import React, {useEffect} from 'react'
import {Group, Text} from '@chakra-ui/react'
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {useMyContext} from "@/context/ShowMapContext";

const ButtonsGroup = () => {
    const {showMap, ponertrue, ponerfalse} = useMyContext();

    return (
        <Group attached>
            <Button onClick={ponerfalse}
                    bg={!showMap ? '#EDF2F7' : '#FFFFFF'} color={'black'} borderRadius={"16px"}>
                <Image src={'/assets/icons/left-icon.png'} alt={'Icono'} width={16} height={16}/>

            </Button>
            <Button onClick={ponertrue} bg={showMap ? '#EDF2F7' : '#FFFFFF'} variant="subtle" borderWidth={'1px'}
                    borderRadius={"16px"}>
                <Image src={'/assets/icons/right-icon.png'} alt={'Icono'} width={16} height={16}/>
            </Button>
        </Group>
    )
}

export default ButtonsGroup
