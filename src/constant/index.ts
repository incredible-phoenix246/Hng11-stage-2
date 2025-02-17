import { NavbarLinkProps, IconProps, ProductCardProps } from "@/types";
import { ShoppingCart, Heart, Profile, SearchNormal1 } from "iconsax-react";

const NAV_LINKS: NavbarLinkProps[] = [
  { id: 1, link: "home", label: "home" },
  { id: 2, link: "gallery", label: "gallery" },
  { id: 3, link: "categories", label: "categories" },
  { id: 4, link: "blog", label: "blog" },
];

const ICON_LINK: IconProps[] = [
  { id: 1, icon: SearchNormal1, action: "search" },
  { id: 2, icon: Heart, action: "favourite" },
  { id: 3, icon: Profile, action: "profile" },
  // { id: 4, icon: ShoppingCart, action: "cart" },
];

const dummyProducts: ProductCardProps[] = [
  {
    id: "men-1",
    image: "/g",
    rating: 4,
    name: "Men's Jacket",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo, accusantium maxime amet quidem nesciunt, adipisci earum magni eos, debitis vel. Libero eaque ipsa voluptatibus quas fuga eveniet ex iusto, tempore tempora temporibus sit possimus accusantium incidunt nihil aliquam deserunt expedita perspiciatis iure vel ipsam nam harum fugit aspernatur in.",
    category: "men",
    price: 5000,
    discount: 20,
    sizes: ["lg", "xl"],
  },
  {
    id: "women-1",
    image: "https://via.placeholder.com/350x400",
    rating: 5,
    name: "Women's Dress",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo, accusantium maxime amet quidem nesciunt, adipisci earum magni eos, debitis vel. Libero eaque ipsa voluptatibus quas fuga eveniet ex iusto, tempore tempora temporibus sit possimus accusantium incidunt nihil aliquam deserunt expedita perspiciatis iure vel ipsam nam harum fugit aspernatur in.",
    category: "women",
    price: 5000,
    discount: 25,
    sizes: ["md", "lg"],
  },
  {
    id: "kids-2",
    image: "https://via.placeholder.com/350x400",
    rating: 3,
    name: "Kids' T-Shirt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo, accusantium maxime amet quidem nesciunt, adipisci earum magni eos, debitis vel. Libero eaque ipsa voluptatibus quas fuga eveniet ex iusto, tempore tempora temporibus sit possimus accusantium incidunt nihil aliquam deserunt expedita perspiciatis iure vel ipsam nam harum fugit aspernatur in.",
    category: "kids",
    price: 10000,
    discount: 10,
    sizes: ["sm", "md"],
  },
  {
    id: "wallet-1",
    image: "https://via.placeholder.com/350x400",
    rating: 4,
    name: "Leather Wallet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo, accusantium maxime amet quidem nesciunt, adipisci earum magni eos, debitis vel. Libero eaque ipsa voluptatibus quas fuga eveniet ex iusto, tempore tempora temporibus sit possimus accusantium incidunt nihil aliquam deserunt expedita perspiciatis iure vel ipsam nam harum fugit aspernatur in.",
    category: "accessories",
    price: 10000,
    discount: 15,
  },
  {
    id: "shoes-2",
    image: "https://via.placeholder.com/350x400",
    rating: 5,
    name: "Running Shoes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo, accusantium maxime amet quidem nesciunt, adipisci earum magni eos, debitis vel. Libero eaque ipsa voluptatibus quas fuga eveniet ex iusto, tempore tempora temporibus sit possimus accusantium incidunt nihil aliquam deserunt expedita perspiciatis iure vel ipsam nam harum fugit aspernatur in.",
    category: "shoes",
    price: 50000,
    discount: 30,
    sizes: ["xl", "2xl"],
  },
  {
    id: "handbag-1",
    image: "https://via.placeholder.com/350x400",
    rating: 4,
    name: "Handbag",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo, accusantium maxime amet quidem nesciunt, adipisci earum magni eos, debitis vel. Libero eaque ipsa voluptatibus quas fuga eveniet ex iusto, tempore tempora temporibus sit possimus accusantium incidunt nihil aliquam deserunt expedita perspiciatis iure vel ipsam nam harum fugit aspernatur in.",
    category: "bags",
    price: 10000,
    discount: 20,
  },
  {
    id: "men-2",
    image: "https://via.placeholder.com/350x400",
    rating: 5,
    name: "Men's Trousers",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo, accusantium maxime amet quidem nesciunt, adipisci earum magni eos, debitis vel. Libero eaque ipsa voluptatibus quas fuga eveniet ex iusto, tempore tempora temporibus sit possimus accusantium incidunt nihil aliquam deserunt expedita perspiciatis iure vel ipsam nam harum fugit aspernatur in.",
    category: "men",
    price: 8000,
    discount: 15,
    sizes: ["md", "lg", "xl"],
  },
  {
    id: "women-2",
    image: "https://via.placeholder.com/350x400",
    rating: 4,
    name: "Women's Blouse",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo, accusantium maxime amet quidem nesciunt, adipisci earum magni eos, debitis vel. Libero eaque ipsa voluptatibus quas fuga eveniet ex iusto, tempore tempora temporibus sit possimus accusantium incidunt nihil aliquam deserunt expedita perspiciatis iure vel ipsam nam harum fugit aspernatur in.",
    category: "women",
    price: 95000,
    discount: 10,
    sizes: ["sm", "md", "lg"],
  },
  {
    id: "kids-1",
    image: "https://via.placeholder.com/350x400",
    rating: 4,
    name: "Kids' Shorts",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo, accusantium maxime amet quidem nesciunt, adipisci earum magni eos, debitis vel. Libero eaque ipsa voluptatibus quas fuga eveniet ex iusto, tempore tempora temporibus sit possimus accusantium incidunt nihil aliquam deserunt expedita perspiciatis iure vel ipsam nam harum fugit aspernatur in.",
    category: "kids",
    price: 15000,
    discount: 5,
    sizes: ["sm", "md"],
  },
  {
    id: "sunglass-1",
    image: "https://via.placeholder.com/350x400",
    rating: 5,
    name: "Sunglasses",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo, accusantium maxime amet quidem nesciunt, adipisci earum magni eos, debitis vel. Libero eaque ipsa voluptatibus quas fuga eveniet ex iusto, tempore tempora temporibus sit possimus accusantium incidunt nihil aliquam deserunt expedita perspiciatis iure vel ipsam nam harum fugit aspernatur in.",
    category: "accessories",
    price: 10000,
    discount: 20,
  },
  {
    id: "shoes-1",
    image: "https://via.placeholder.com/350x400",
    rating: 3,
    name: "Casual Shoes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo, accusantium maxime amet quidem nesciunt, adipisci earum magni eos, debitis vel. Libero eaque ipsa voluptatibus quas fuga eveniet ex iusto, tempore tempora temporibus sit possimus accusantium incidunt nihil aliquam deserunt expedita perspiciatis iure vel ipsam nam harum fugit aspernatur in.",
    category: "shoes",
    price: 4500,
    discount: 15,
    sizes: ["md", "lg", "xl"],
  },
  {
    id: "backpack-1",
    image: "https://via.placeholder.com/350x400",
    rating: 4,
    name: "Backpack",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo, accusantium maxime amet quidem nesciunt, adipisci earum magni eos, debitis vel. Libero eaque ipsa voluptatibus quas fuga eveniet ex iusto, tempore tempora temporibus sit possimus accusantium incidunt nihil aliquam deserunt expedita perspiciatis iure vel ipsam nam harum fugit aspernatur in.",
    category: "bags",
    price: 5000,
    discount: 10,
  },
];

export { NAV_LINKS, ICON_LINK, dummyProducts };
