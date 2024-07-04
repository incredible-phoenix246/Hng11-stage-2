"use client";

import React, { useEffect, useState } from "react";
import { useStateCtx } from "@/context/StateCtx";
import useWindowHeight from "@/hooks/useDimension";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/utils";
import { NAV_LINKS, ICON_LINK } from "@/constant";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
  const {} = useStateCtx();
  const searchParams = useSearchParams().get("path");
  const scrollHeight = useWindowHeight();
  const pathname = usePathname();

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
        " max-[500px]:py-2 flex w-full justify-between items-center  transition-colors duration-500 container",
        scrollHeight > 200
          ? " fixed backdrop-blur-xl top-0 left-0  z-50 -translate-y-28 opacity-0 animate-slideDown bg-base-white py-2 shadow-md"
          : "sm:py-6 py-4",
        {
          "bg-base-white/60": scrollHeight > 800 && scrollHeight < 4300,
        }
      )}
    >
      <div className="hidden lg:flex items-center gap-x-5 lg:gap-x-7 2xl:gap-x-10 w-full justify-center max-w-[50%] 2xl:max-w-[40%]">
        {NAV_LINKS.map((link) => (
          <Link
            href={`/?path=${link.link}`}
            key={link.id}
            className="text-base capitalize font-medium"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link
        href="/?path=home"
        className={cn(
          " max-sm:w-[120px] max-[450px]:w-[100px] hidden lg:flex",
          scrollHeight > 200 ? "w-[120px] " : "w-fit"
        )}
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={155}
          height={55}
          className="dark:invert"
        />
      </Link>
      <div className="hidden lg:flex items-center gap-x-5 lg:gap-x-7 2xl:gap-x-10 w-full justify-center max-w-[50%] 2xl:max-w-[40%]">
        {ICON_LINK.map((link) => (
          <Button key={link.id} className="text-primary" variant="ghost">
            <link.icon size={24} aria-hidden />
          </Button>
        ))}
        <Button asChild className="bg-secondary">
          <Link href="/?paht=shop">Shop</Link>
        </Button>
      </div>
    </nav>
  );
};

export { Navbar };
