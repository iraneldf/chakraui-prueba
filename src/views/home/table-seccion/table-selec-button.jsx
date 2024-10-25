"use client"

import {createListCollection} from "@chakra-ui/react"
import {
    SelectContent,
    SelectItem,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select"

// todo ver aki el estilo o fuente (lato) del numero q sale
const SelectButton = () => {
    return (
        <SelectRoot fontFamily="'Inter Regular', sans-serif" collection={entries} size="sm" width="98px"
                    borderRadius={'6px'} borderWidth={'1px'}>
            <SelectTrigger>
                <SelectValueText placeholder="10"/></SelectTrigger>
            <SelectContent bg={'#FFFFFF'}>
                {entries.items.map((movie) => (
                    <SelectItem _hover={{bg: "#FF7500"}} color={'black'} item={movie} key={movie.value}>
                        {movie.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </SelectRoot>
    )
}

const entries = createListCollection({
    items: [
        {label: "10", value: 10},
        {label: "15", value: 15},
        {label: "30", value: 30},
        {label: "50", value: 50},
    ],
})

export default SelectButton;