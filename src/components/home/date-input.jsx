import { Box, Input, Icon } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';

const DateInput = () => {
    return (
        <Box position="relative" width="fit-content">
            <Input
                type="date"
                defaultValue="2024-07-06" // Formato YYYY-MM-DD
                borderRadius="4px"
                px="16px"
                borderWidth="1px"
                borderColor="#E2E8F0"
                sx={{
                    '::webkit-calendar-picker-indicator': {
                        display: 'none', // Oculta el icono del calendario
                    },
                    'appearance': 'none', // Para eliminar el estilo predeterminado en otros navegadores
                }}
            />
            <Icon
                as={CalendarIcon}
                position="absolute"
                right="10px"
                top="50%"
                transform="translateY(-50%)"
                color="gray.500"
                cursor="pointer"
            />
        </Box>
    );
};

export default DateInput;