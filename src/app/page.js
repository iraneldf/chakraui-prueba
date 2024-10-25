import {
    Box,
} from '@chakra-ui/react'
import ToolBar from '@/views/home/toolbar'
import TableSeccion from '@/views/home/table-seccion'


export default function Home() {
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
            <ToolBar/>

            <TableSeccion/>
        </Box>)
}
