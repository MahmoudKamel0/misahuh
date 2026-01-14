import { CoffeeShopIcon } from "@public/icons/coffee-shop";
import { CompoundIcon } from "@public/icons/compund";
import { HouseIcon } from "@public/icons/house";
import { RestaurantIcon } from "@public/icons/restaurant";

export const TYPES_REAL_ESTATE = [
    {
        id: 1,
        icon: <HouseIcon className="fill-red-500" />,
        name: "House"
    },
    {
        id: 3,
        icon: <CompoundIcon />,
        name: "Compound"
    },
    {
        id: 4,
        icon: <CoffeeShopIcon />,
        name: "Coffee Shop"
    },
    {
        id: 5,
        icon: <RestaurantIcon />,
        name: "Restaurant"
    },
]