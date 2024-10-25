import {Tag} from '@/components/ui/tag'
import {Badge, HStack, Stack} from '@chakra-ui/react'

const BadgesRow = () => {
    return (
        <>
            <Badge bg={'#718096'} color={'#FFFFFF'} px={'4px'} fontWeight={'700'}>ALL STATUS</Badge>
            <Badge px={'4px'}  borderRadius={'2px'} borderWidth={'1px'} borderColor={'#3182CE'} color={'#2B6CB0'} fontWeight={'700'} variant='outline'>TRASNPORTING</Badge>
            <Badge px={'4px'}  borderRadius={'2px'} borderWidth={'1px'} borderColor={'#DD6B20'} color={'#C05621'} fontWeight={'700'} variant='outline'>PACKPAGIN</Badge>
            <Badge px={'4px'}  borderRadius={'2px'} borderWidth={'1px'} borderColor={'#38A169'} color={'#25855A'} fontWeight={'700'} variant='outline'>DELIVIRED</Badge>
            <Badge px={'4px'}  borderRadius={'2px'} borderWidth={'1px'} borderColor={'#E53E3E'} color={'#C53030'} fontWeight={'700'} variant='outline'>CANCELED</Badge>
        </>
    )
}

export default BadgesRow
