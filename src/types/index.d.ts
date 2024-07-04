import { type Icon } from "iconsax-react";

type NavbarLinkProps = {
    id?: number | string;
    link: string;
    label: string;

};

type IconProps = {
    id?: number | string
    icon: Icon;
    action: "search" | "profile" | "cart" | "favourite"
}


export { NavbarLinkProps, IconProps }