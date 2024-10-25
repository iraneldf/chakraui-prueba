'use client';
import Title from '@/components/title'
import {Box, Card, Flex, Heading, Text} from '@chakra-ui/react'
import React, {useState} from 'react'
import AssignmentsComponentLayout from './assignments-component-layout'
import {Button} from '@/components/ui/button'
import MyModal from "@/components/general/MyModal";

const Assignments = () => {
    const listAssigments = [{
        label: 'Segun Adebayo', avatar: '/assets/images/avatar-1.svg', number: '5'
    }, {
        label: 'Segun Adebayo', avatar: '/assets/images/avatar-2.svg', number: '4'
    }, {
        label: 'Segun Adebayo', avatar: '/assets/images/avatar-3.svg', number: '1'
    }]

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (<Box
        h={'100%'}
        w={'317px'}
        bg={'#FFFFFF'}
        boxShadow={'0px 5px 80px 0px #7272720D'}
        py={'30px'}
        px={'35px'}
        borderRadius='20px'>

        <Flex direction={'column'} gap={'10px'}>
            <Title title='Assignments' subTitle='Assignments to messengers'/>

            <Box minHeight={'464px'}>
                {listAssigments?.map(({label, avatar, number}, index) => {
                    return (<AssignmentsComponentLayout
                        key={index}
                        label={label}
                        avatar={avatar}
                        number={number}
                        backgroundColor={index % 2 === 0 ? 'hsla(210, 38%, 95%, 1)' : 'transparent'}
                    />)
                })}
            </Box>

            {/*todo ver aki la fuente inter*/}
            <Button onClick={openModal} bg={'#FF7500'} borderRadius={'16px'} px={'16px'} w={'247px'}>
                <Text
                    fontFamily="'Inter Regular', sans-serif"
                    fontWeight={'600'}
                    fontSize={'16px'}
                    lineHeight={'24px'}
                    color={'#FFFFFF'}
                >
                    Assign All
                </Text>
            </Button>
            <MyModal ariaHideApp={false} isOpen={isModalOpen} onRequestClose={closeModal}/>
        </Flex>
    </Box>)
}

export default Assignments
