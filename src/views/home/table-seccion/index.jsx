import {Box, Card} from '@chakra-ui/react'
import React from 'react'
import Assignments from '../assignments'
import Tabla from './Tabla'

const TableSeccion = () => {
    return (
        <Box
            width={'100%'}
            display={'flex'}
            flexDirection={'row'}
            gap={'40px'}
        >

            <Box borderRadius='10px' flex={'10'}>
                <Tabla/>
            </Box>

            <Box flex={'2'}>
                <Assignments/>
            </Box>


        </Box>
    )
}

export default TableSeccion
