import {Provider} from "@/components/ui/provider"
import '@/app/globals.css'
import {
    Box, Flex, VStack,
} from '@chakra-ui/react';

import NavBarComponent from "@/components/NavBar/NavBarComponent";
import MySideBar from "@/components/SideBar/SideBarComponent";
import {Poppins} from 'next/font/google';
import FooterComponent from "@/components/Footer/Footer";
import {MyProvider} from "@/context/ShowMapContext";


const poppins = Poppins({
    subsets: ['latin'], // Puedes añadir otros subsets si lo necesitas
    weight: ['400', '600'], // Especifica los pesos que usarás
});

// const lato = Lato({
//     subsets: ['latin'], // Puedes añadir otros subsets si lo necesitas
//     weight: ['400', '700'], // Especifica los pesos que usarás
// });

export default function RootLayout({children}) {
    // todo importar la fuente Poppins

    return (<html lang='es' suppressHydrationWarning>
    <body className={`${poppins.className}`}>
    <Provider>
        <Flex bg={'#FFFFFF'} direction="row">
            {/*    /!* Barra de navegacion lateral *!/*/}
            <MySideBar/>

            {/*    /!* Main Content *!/*/}
            <Flex direction={'column'} minHeight={'100vh'} width={"100%"}>
                {/*        /!* Barra navegacion superior *!/*/}
                <NavBarComponent/>


                <Box bg={"#F9FAFB"} flex={'1'} borderTopLeftRadius={"50px"}>
                    <MyProvider>
                        {children}
                    </MyProvider>
                </Box>

                <FooterComponent/>


            </Flex>
            {/*</VStack>*/}
        </Flex>
    </Provider>
    </body>
    </html>);
}
