import { getCabins } from "../_lib/data-service"

async function TotalCabins() {
    const cabins = await getCabins();
    return (
        <span>
            {` ${cabins.length} `}
        </span>
    )
}

export default TotalCabins
