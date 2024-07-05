"use client";

import React, { useEffect, useState } from "react";
import { useStateCtx } from "@/context/StateCtx";
import useWindowHeight from "@/hooks/useDimension";
import { useSearchParams } from "next/navigation";
import { cn } from "@/utils";
import { NAV_LINKS, ICON_LINK } from "@/constant";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  FaThreads,
  FaXTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

const Navbar = () => {
  const {} = useStateCtx();
  const searchParams = useSearchParams().get("path");
  const scrollHeight = useWindowHeight();

  const [isActive, setIsActive] = useState("");
  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);
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
        <div className="flex gap-x-1">
          {ICON_LINK.map((link) => (
            <Button
              key={link.id}
              className="text-primary text-base"
              variant="ghost"
            >
              <link.icon aria-hidden />
            </Button>
          ))}
        </div>
        <Button asChild variant="secondary">
          <Link href="/?paht=shop">Shop</Link>
        </Button>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="container flex flex-col md:flex-row items-center justify-between bg-[#242535]">
      <div className="flex items-center flex-col gap-2">
        <div>
          <h2 className="uppercase text-pretty text-primary font-unica text-5xl font-semibold">
            fiWears
          </h2>
          <span className="text-xs font-medium text-nowrap">
            The Home Of Clothings
          </span>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export { Navbar, Footer };
