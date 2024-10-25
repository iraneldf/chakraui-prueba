import { SegmentedControl } from "@/components/ui/segmented-control"

const ButtonsSegmented = () => {
    return (
        <SegmentedControl borderRadius={'30px'} defaultValue="React" items={["React", "Vue"]} />
    )
}

export default ButtonsSegmented;