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

type Tabprops = {
    id: number | string
    label: string;
    tab: string
}

type ImageCardProps = {
    src: string;
    className?: string;
    width?: number;
    height?: number;
    fill?: boolean
};

type GalleryProps = {
    id: number | string,
    src: string;

}


export { NavbarLinkProps, IconProps, Tabprops, ImageCardProps, GalleryProps }