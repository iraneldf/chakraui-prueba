// app/components/MyModal.jsx
import React from 'react';
import Modal from 'react-modal';
import {Heading, HStack, VStack} from "@chakra-ui/react";
import {Button} from "@/components/ui/button";
import MySelect from "@/components/general/MySelect";

const MyModal = ({isOpen, onRequestClose}) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            style={{
                overlay: {
                    backgroundColor: '#0000004D', // Fondo difuminado
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    transform: 'translate(-50%, -50%)',
                    padding: '20px',
                    width: '448px',
                    borderRadius: '6px 0px 0px 0px',
                    boxShadow: '0px 4px 120px 0px #73737314',
                },
            }}
            contentLabel="Example Modal"
        >
            <VStack>
                <HStack py={'16px'} px={'24px'} w={'100%'} justify="space-between">
                    <Heading>Assign To Messenger</Heading>
                    <button onClick={onRequestClose} style={{float: 'right'}}>
                        &times;
                    </button>
                </HStack>

                <VStack py={'8px'} px={'24px'} w={'100%'} align={'start'} justify="space-between">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua. </p>

                    <MySelect/>
                </VStack>


                <HStack w={'100%'} justify="end">
                    <Button color={'#1A202C'} bg={'#EDF2F7'}>Cancel</Button>
                    <Button color={'#FFFFFF'} bg={'#FF7500'}>Assing to</Button>

                </HStack>
            </VStack>

        </Modal>
    );
};

export default MyModal;