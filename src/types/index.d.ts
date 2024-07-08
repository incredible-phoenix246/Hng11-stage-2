import { type Icon } from "iconsax-react";

type NavbarLinkProps = {
  id?: number | string;
  link: string;
  label: string;
};

type IconProps = {
  id?: number | string;
  icon: Icon;
  action: "search" | "profile" | "cart" | "favourite";
};

type Tabprops = {
  id: number | string;
  label: string;
  tab: string;
};

type ImageCardProps = {
  src: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
};

type GalleryProps = {
  id: number | string;
  src: string;
};

interface ProductCardProps {
  id: number | string;
  image: string;
  rating: number;
  name: string;
  desc: string;
  category: string;
  price: number;
  discount: number;
  sizes?: ("2xl" | "xl" | "lg" | "md" | "sm")[];
}

interface CartItem {
  id: number | string;
  name: string;
  category: string;
  price: number;
  size?: "2xl" | "xl" | "lg" | "md" | "sm";
  quantity: number;
}

export {
  NavbarLinkProps,
  IconProps,
  Tabprops,
  ImageCardProps,
  GalleryProps,
  ProductCardProps,
  CartItem, 
};
