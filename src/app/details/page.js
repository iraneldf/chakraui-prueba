import {
    Box
} from '@chakra-ui/react'
import InfoDetails from "@/views/details/InfoDetails";
import ProductStatusInfo from "@/views/details/Product-Status-Info";


export default function Details() {

    return (
        <Box
            width={'100%'}
            display={'flex'}
            flexDirection={'column'}
            gap={'20px'}
            alignItems={'center'}
            justifyContent='start'
            padding={'60px'}
        >
            <InfoDetails/>

            <ProductStatusInfo/>
        </Box>)
}


