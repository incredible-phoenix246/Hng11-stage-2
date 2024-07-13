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
  discount: number;
}

interface Category {
  organization_id: string;
  name: string;
  position: number | null;
  category_type: string;
  description: string;
  last_updated: string;
  id: string;
  parent_id: string | null;
  url_slug: string | null;
  is_deleted: boolean;
  date_created: string;
  subcategories: any[];
  parents: any[];
}

interface Photo {
  model_name: string;
  model_id: string;
  organization_id: string;
  filename: string;
  url: string;
  is_featured: boolean;
  save_as_jpg: boolean;
  is_public: boolean;
  file_rename: boolean;
  position: number;
}

interface Price {
  USD: [number, number | null, any[]];
}

interface Product {
  name: string;
  description: string;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: string[] | null;
  unavailable: boolean;
  unavailable_start: string | null;
  unavailable_end: string | null;
  id: string;
  parent_product_id: string | null;
  parent: string | null;
  organization_id: string;
  product_image: any[];
  categories: Category[];
  date_created: string;
  last_updated: string;
  user_id: string;
  photos: Photo[];
  current_price: Price[];
  is_deleted: boolean;
  available_quantity: number;
  selling_price: number | null;
  discounted_price: number | null;
  buying_price: number | null;
  extra_infos: any[] | null;
}

export {
  NavbarLinkProps,
  IconProps,
  Tabprops,
  ImageCardProps,
  GalleryProps,
  ProductCardProps,
  CartItem,
  Product,
};
