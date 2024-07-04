import { NavbarLinkProps, IconProps } from "@/types";
import { profile } from "console";
import { ShoppingCart, Heart, Profile, SearchFavorite, SearchNormal1 } from "iconsax-react"

const NAV_LINKS: NavbarLinkProps[] = [
    { id: 1, link: "home", label: "home" },
    { id: 2, link: "gallery", label: "gallery" },
    { id: 3, link: "categories", label: "categories" },
    { id: 3, link: "blog", label: "blog" },
];

const ICON_LINK: IconProps[] = [
    { id: 1, icon: SearchFavorite, action: "search" },
    { id: 2, icon: Heart, action: "favourite" },
    { id: 3, icon: Profile, action: "profile" },
    { id: 4, icon: ShoppingCart, action: "cart" }
]

export { NAV_LINKS, ICON_LINK }