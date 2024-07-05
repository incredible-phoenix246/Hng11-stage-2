"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LifeBuoy, Plane, History } from "lucide-react";
import useMediaQuery from "@/hooks/use-media-query";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils";
import { ImageCardProps, Tabprops } from "@/types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useStateCtx } from "@/context/StateCtx";

const HeroSection = () => {
  return (
    <section className="relative h-[500px] sm:h-[720px] w-full">
      <div className="w-full h-full max-h-[720px] hidden sm:block absolute top-0 left-0 bg-primary">
        <Image
          src="/main.png"
          alt="hero image"
          width={1440}
          height={720}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full max-h-[650px] sm:hidden absolute top-0 left-0 bg-primary">
        <Image
          src="/mobile-hero.png"
          alt="hero image"
          width={380}
          height={500}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex top-0 relative z-10 text-base-white h-full items-center w-full bg-primary/70 lg:bg-primary/70 justify-center px-2 sm:px-4 lg:px-8 transition-colors duration-500">
        <div className="flex flex-col gap-y-5 w-full sm:max-w-[90%]   xl:max-w-[85%] 2xl:max-w-[90%]  items-center">
          <h2 className="text-5xl md:text-6xl text-center lg:text-[96px] font-semibold sm:font-bold lg:mb-8 font-unica">
            Discover Your Style
          </h2>
          <p className="w-full sm:max-w-[80%] text-center font-semibold text-base-white md:text-[28px] md:leading-8 text-base">
            Welcome to FiWears, where fashion meets function. Explore our
            curated collection of clothing, bags, shoes, and glasses. From
            timeless classics to trendy must-haves, we&apos;ve got you covered.
          </p>
          <div className="mt-3 lg:mt-6 w-full justify-center flex">
            <Button
              variant="secondary"
              className="text-base tracking-tight md:text-[28px] px-[18px] py-[24px]"
            >
              Start shopping now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const GranteeSection = () => {
  const { isTablet, isMobile } = useMediaQuery();
  return (
    <main className="container">
      <section className="flex items-center justify-between py-4 overflow-hidden max-w-[1400px place-content-center]">
        <div className="min-[900px]:h-[120px] min-[500px]:h-[80px] h-[33.51px] [clip-path:polygon(0%_0%,_90%_0%,_100%_50%,_90%_100%,_0%_100%,_0%_0%)] bg-primary  text-base-white rounded-[4px] md:rounded-[10px] lg:rounded-[16px] lg:w-[400px] min-[500px]:w-[300px] w-[133.65px] flex items-center justify-center py-2">
          <div className="flex lg:min-[900px]:w-[342px] md:w-[250px] w-[95px] min-[900px]:h-[82px] md:h-[50px] h-[25px] items-center justify-center text-[48px] lg:gap-x-2 md:gap-x-1 gap-x-0.5">
            <Plane size={isMobile ? 12 : isTablet ? 32 : 40} strokeWidth={2} />
            {/* <Plane size={40} strokeWidth={1} /> */}
            <div className="flex flex-col text-center">
              <p className="text-base-white lg:text-4xl md:text-2xl min-[500px]:text-lg text-xs font-unica">
                Free Shipping
              </p>
              <span className="md:text-base lg:text-lg text-[6px]  font-semibold  text-neutral-300">
                In Order Min N300,000
              </span>
            </div>
          </div>
        </div>
        <div className="min-[900px]:h-[120px] h-[33.51px] min-[500px]:h-[80px] [clip-path:polygon(0%_0%,_100%_0%,_90%_50%,_100%_100%,_0%_100%,_10%_50%)] bg-secondary  text-base-white lg:w-[400px] min-[500px]:w-[300px] w-[133.65px] flex items-center justify-center">
          <div className="flex lg:min-[900px]:w-[342px] md:w-[250px] w-[105px] min-[900px]:h-[82px] md:h-[50px] h-[25px] items-center justify-center text-[48px] lg:gap-x-2 md:gap-x-1 gap-x-0.5">
            <History
              size={isMobile ? 12 : isTablet ? 32 : 40}
              strokeWidth={2}
            />
            <div className="flex flex-col text-center">
              <p className="text-base-white lg:text-4xl md:text-2xl  min-[500px]:text-lg text-[8px] font-unica">
                30-DAYS RETURN
              </p>
              <span className="md:text-base lg:text-lg text-[4px] font-semibold  text-neutral-300">
                Moneyback Guaranteed
              </span>
            </div>
          </div>
        </div>
        <div className="min-[900px]:h-[120px] h-[33.51px] min-[500px]:h-[80px] [clip-path:polygon(10%_0%,_100%_0%,_100%_50%,_100%_100%,_10%_100%,_0%_50%)] bg-primary  text-base-white rounded-[4px] md:rounded-[10px] lg:rounded-[16px] lg:w-[400px] min-[500px]:w-[300px] w-[133.65px] flex items-center justify-center">
          <div className="flex lg:min-[900px]:w-[342px] md:w-[250px] w-[95px] min-[900px]:h-[82px] md:h-[50px] h-[25px] items-center justify-center text-[48px] lg:gap-x-2 md:gap-x-1 gap-x-0.5">
            <LifeBuoy
              size={isMobile ? 12 : isTablet ? 32 : 40}
              strokeWidth={2}
            />
            <div className="flex flex-col text-center">
              <p className="text-base-white lg:text-4xl md:text-2xl  min-[500px]:text-lg text-xs font-unica">
                24/7 SUPPORT
              </p>
              <span className="md:text-base lg:text-lg text-[6px]  font-semibold  text-neutral-300">
                Lifeline Support
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const GallerySection = () => {
  const GallerysRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref: GallerysRef, once: false });
  const [currentTab, setcurrentTab] = useState<String>("men");
  return (
    <section
      ref={GallerysRef}
      className={cn(
        "container",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 mt-7"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="w-full flex-col lg:flex-row flex justify-between items-center">
        <div className="flex flex-col items-center">
          <h2 className="uppercase text-pretty text-primary font-unica text-3xl md:text-6xl font-semibold">
            FROM OUR GALLERY
          </h2>
          <span className="text-sm md:text-lg text-primary/80 font-medium">
            Discover chic fashion essentials from FiWears
          </span>
        </div>
        <div className="lg:w-[45%] flex">
          {tabs.slice(0, 5).map((tab) => (
            <Button
              variant="ghost"
              key={tab.id}
              onClick={() => setcurrentTab(tab.tab)}
              className={cn(
                "md:text-base text-[12px] relative items-center text-primary font-medium w-full capitalize before:bg-secondary before:w-[0%] before:h-[3px] before:absolute before:-bottom-0.5 before:left-0 before:transition-all before:duration-500 before:rounded-sm before:self-center",
                currentTab === tab.tab ? "before:w-full text-secondary" : ""
              )}
            >
              <span> {tab.label}</span>
            </Button>
          ))}
        </div>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-between gap-2 mt-5">
        <div className="flex flex-col items-center gap-2">
          <ImageCard
            src="/product/gallery/mens-1.png"
            width={350}
            height={350}
          />
          <ImageCard
            src="/product/gallery/mens-2.png"
            width={350}
            height={350}
          />
          <ImageCard
            src="/product/gallery/ladies-1.png"
            width={350}
            height={350}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <LargeImageCard
            src="/product/gallery/ladies-2.png"
            width={350}
            height={71}
          />
          <ImageCard
            src="/product/gallery/kids-1.png"
            width={350}
            height={350}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <LargeImageCard
            src="/product/gallery/general-1.png"
            width={723}
            height={348}
          />
          <div className="flex flex-col md:flex-row gap-2">
            <ImageCard
              src="/product/gallery/shoes-1.png"
              width={350}
              height={350}
            />
            <ImageCard
              src="/product/gallery/ladies-1.png"
              width={350}
              height={350}
            />
          </div>
          <LargeImageCard
            src="/product/gallery/kids-2.png"
            width={723}
            height={348}
          />
        </div>
      </section>
    </section>
  );
};

const ImageCard = ({ src, className, width, height, fill }: ImageCardProps) => (
  <div
    className={cn(
      "flex flex-col justify-center items-center aspect-square rounded-2xl",
      className
    )}
  >
    <Image
      fill={fill}
      height={height}
      width={width}
      src={src}
      alt="gallery images"
      className="rounded-2xl object-cover"
    />
  </div>
);

const LargeImageCard = ({
  src,
  className,
  width,
  height,
  fill,
}: ImageCardProps) => (
  <div
    className={cn("flex flex-col justify-center w-full rounded-2xl", className)}
  >
    <Image
      fill={fill}
      height={height}
      width={width}
      src={src}
      alt="gallery images"
      className="rounded-2xl object-cover"
    />
  </div>
);

const tabs: Tabprops[] = [
  { id: 1, label: "men", tab: "men" },
  { id: 2, label: "women", tab: "women" },
  { id: 3, label: "kids", tab: "kids" },
  { id: 4, label: "accessories", tab: "accessories" },
  { id: 5, label: "shoes", tab: "shoes" },
  { id: 6, label: "bags", tab: "bags" },
];

const ShopSection = () => {
  const ShopRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref: ShopRef, once: false });
  const [currentTab, setcurrentTab] = useState<String>("men");
  const { openDesc, setOpenDesc } = useStateCtx();
  return (
    <main
      ref={ShopRef}
      className={cn(
        "container mt-8",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 mt-7"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="flex flex-col items-center justify-center w-full text-center">
        <div className="flex flex-col items-center justify-center w-full max-w-[671px]">
          <h2 className="uppercase text-pretty text-primary font-unica text-3xl md:text-6xl font-semibold">
            BROWSE BY CATEGORY
          </h2>
          <span className="text-sm md:text-2xl text-primary/80 font-medium">
            Discover Your Signature Style: Explore Our Diverse Clothing
            Categories Now!
          </span>
        </div>
        <nav className="mt-6 lg:w-[800px] md:w-[90%] w-[80%] flex border border-primary h-[50px] divide-x-2 divide-primary rounded-[10px] overflow-hidden items-center justify-between object-cover">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setcurrentTab(tab.tab)}
              className={cn(
                "text-center items-center justify-center flex w-full cursor-pointer h-full font-semibold text-xs md:text-base capitalize",
                currentTab === tab.tab
                  ? "text-secondary bg-primary"
                  : "text-secondary"
              )}
            >
              <span>{tab.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </main>
  );
};

export { HeroSection, GranteeSection, GallerySection, ShopSection };
