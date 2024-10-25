"use client"

import { createListCollection } from "@chakra-ui/react"
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select"

const MySelect = () => {
    return (
        <SelectRoot collection={frameworks} size="sm" width="320px">
            <SelectLabel color={'#737791'}>MESSANGER</SelectLabel>
            <SelectTrigger>
                <SelectValueText placeholder="Pedro Cruz Dominguez" />
            </SelectTrigger>
            <SelectContent>
                {frameworks.items.map((movie) => (
                    <SelectItem item={movie} key={movie.value}>
                        {movie.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </SelectRoot>
    )
}

const frameworks = createListCollection({
    items: [
        { label: "Pedro Cruz Dominguez", value: "react" },
        { label: "Pedro Cruz Dominguez", value: "vue" },
        { label: "Pedro Cruz Dominguez", value: "angular" },
        { label: "Pedro Cruz Dominguez", value: "svelte" },
    ],
})

export default MySelect;