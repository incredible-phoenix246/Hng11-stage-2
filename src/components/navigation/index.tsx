"use client";

import React, { useEffect, useState } from "react";
import { useStateCtx } from "@/context/StateCtx";
import useWindowHeight from "@/hooks/useDimension";
import { useSearchParams } from "next/navigation";
import { cn, getObjectFromLocalStorage } from "@/utils";
import { NAV_LINKS, ICON_LINK } from "@/constant";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  FaThreads,
  FaXTwitter,
  FaInstagram,
  FaWhatsapp,
  FaBars,
} from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { ArrowRight, ShoppingCart } from "iconsax-react";
import { ProductCardProps } from "@/types";

const Navbar = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const searchParams = useSearchParams().get("path");
  const scrollHeight = useWindowHeight();
  const [cart, setCart] = useState<number>(0);

  const [isActive, setIsActive] = useState("");
  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  useEffect(() => {
    const updateCart = () => {
      const cart = getObjectFromLocalStorage<ProductCardProps[]>("cart");
      if (cart) {
        setCart(cart.length);
      }
    };

    updateCart();

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "cart") {
        updateCart();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    const handleLocalStorageUpdate = () => {
      updateCart();
    };

    window.addEventListener("localStorageUpdate", handleLocalStorageUpdate);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(
        "localStorageUpdate",
        handleLocalStorageUpdate
      );
    };
  }, []);

  return (
    <nav
      className={cn(
        "py-2 md:py-4 lg:py-6 flex w-full justify-between items-center  transition-colors duration-500 px-4 sm:px-8 xl:px-16 2xl:px-24",
        scrollHeight > 200
          ? "fixed backdrop-blur-xl top-0 left-0  z-50 -translate-y-28 opacity-0 animate-slideDown bg-base-white/70 py-2 shadow-md"
          : "sm:py-6 py-4",
        {
          "bg-base-white/60": scrollHeight > 800 && scrollHeight < 4300,
        }
      )}
    >
      <Link
        href="/?path=home"
        className={cn(
          " max-sm:w-[120px] max-[450px]:w-[100px] min-[900px]:hidden",
          scrollHeight > 200 ? "w-[120px] " : "w-fit"
        )}
      >
        <Image src="/logo.png" alt="logo" width={264} height={118} />
      </Link>
      <div className="hidden min-[900px]:flex items-center gap-x-5 max-w-[376px]">
        {NAV_LINKS.map((link) => (
          <Link
            href={`/?path=${link.link}`}
            key={link.id}
            className={cn(
              "text-base capitalize font-semibold",
              isActive === link.link ? "text-secondary" : "text-primary"
            )}
            onClick={() => {
              setIsActive(link.link);
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link
        href="/?path=home"
        className={cn(
          "hidden max-w-[198px] min-[900px]:flex max-h-[80px] flex-col text-center",
          scrollHeight > 200 ? "w-[120px] " : "w-fit"
        )}
      >
        <h2 className="uppercase text-pretty text-primary font-unica text-5xl font-semibold">
          fiWears
        </h2>
        <span className="text-xs font-medium text-nowrap">
          The Home Of Clothings
        </span>
      </Link>
      <div className="hidden min-[900px]:flex items-center gap-x-3 w-full justify-center max-w-[360px]">
        <div className="flex gap-x-1 relative">
          {ICON_LINK.map((link) => (
            <Button
              key={link.id}
              className="text-primary text-base relative"
              variant="ghost"
            >
              <span className="">
                <link.icon aria-hidden />
              </span>
              {link.action === "cart" && (
                <span className="absolute top-[2px] right-[2px] text-xs font-medium text-secondary">
                  {cart}
                </span>
              )}
            </Button>
          ))}
        </div>
        <Button asChild variant="secondary">
          <Link href="/cart?path=cart">Cart</Link>
        </Button>
      </div>
      <div className="min-[900px]:hidden flex gap-2">
        <Button className="text-primary text-base relative" variant="ghost">
          <span className="">
            <ShoppingCart aria-hidden />
          </span>

          <span className="absolute top-[2px] right-[2px] text-xs font-medium text-secondary">
            {cart}
          </span>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/cart?path=cart">Cart</Link>
        </Button>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row items-center justify-between bg-[#242535] px-4 sm:px-8 xl:px-16 2xl:px-24 text-secondary md:h-[392px] mt-[40px] py-3">
      <div className="flex items-center md:items-start gap-y-5  flex-col gap-2 w-full md:max-w-[30%]">
        <div>
          <h2 className="uppercase text-pretty text-primary font-unica text-5xl font-semibold">
            fiWears
          </h2>
          <span className="text-xs font-medium text-nowrap text-secondary">
            The Home Of Clothings
          </span>
        </div>
        <div className="flex items-center gap-1 w-full justify-center">
          {social.map((sc) => (
            <Link
              key={sc.id}
              href="/"
              className="bg-secondary rounded-full h-8 w-8 flex items-center justify-center"
            >
              <sc.icon className="h-6 w-6 text-primary" />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-2 w-full md:max-w-[40%] gap-y-5 text-center">
        <div className="flex items-center justify-center w-full text-lg gap-1">
          <span>Men</span>
          <span>Women</span>
          <span>Kids</span>
          <span>Jewelries</span>
        </div>
        <div className="flex flex-col w-full items-center justify-center text-lg">
          <h2 className="underline text-2xl">Contact Us</h2>
          <span className="text-wrap">
            Number 1A, Aukland Avenue, off dandizy way, Ikeja, Lagos State
          </span>
        </div>
      </div>
      <div className="flex items-center md:items-start gap-y-5  flex-col gap-2 w-full md:max-w-[30%]">
        <h2 className="w-full text-2xl font-semibold text-emerald-100 text-center">
          Subscribe to our Newsletter
        </h2>
        <form action="" className="flex items-center justify-center gap-1">
          <input
            type="text"
            placeholder="email..."
            className="md:w-[296px] w-[250px] px-3 py-3.5 rounded border outline-none border-emerald-100 border-solid bg-slate-600"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="bg-secondary w-[38px] py-4 rounded-r-md items-center flex justify-center"
          >
            <ArrowRight color="#FFF" />
          </button>
        </form>
      </div>
    </footer>
  );
};

const social = [
  { id: 1, icon: FaWhatsapp },
  { id: 2, icon: FiFacebook },
  { id: 4, icon: FaXTwitter },
  { id: 3, icon: FaInstagram },
  { id: 5, icon: FaThreads },
];

export { Navbar, Footer };
