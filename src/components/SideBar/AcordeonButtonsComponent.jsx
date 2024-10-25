import {AbsoluteCenter, Box, Button} from "@chakra-ui/react"
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "@/components/ui/accordion"


export default function AcordeonButtonsComponent() {
    const items = [
        {value: "a", title: "Client", text: 'texto'},
        {value: "b", title: "Users", text: 'texto'},
        {value: "c", title: "Categories", text: 'texto'},
    ];

    return (
        // todo ajustas color de la flecha y distancia de la flecha al texto
        <AccordionRoot  spaceY="4" m="5" variant="plain" color={"#A0AEC0"}  collapsible defaultValue={[]}>
            {items.map((item, index) => (
                <AccordionItem key={index} value={item.value}>

                    <Box position="relative">
                        <AccordionItemTrigger indicatorPlacement="start">
                            {item.title}
                        </AccordionItemTrigger>

                    </Box>
                    <AccordionItemContent color={"#A0AEC0"} >{item.text}</AccordionItemContent>
                </AccordionItem>
            ))}
        </AccordionRoot>
    );
}
