"use client";

import React, { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/slider";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LifeBuoy, Plane, History } from "lucide-react";
import useMediaQuery from "@/hooks/use-media-query";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils";
import { ImageCardProps, Tabprops, ProductCardProps } from "@/types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useStateCtx } from "@/context/StateCtx";
import { dummyProducts } from "@/constant";

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
  return (
    <main
      ref={ShopRef}
      className={cn(
        "mt-8",
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
        <nav className="mt-6 lg:w-[800px] md:w-[90%] w-[95%] flex border border-primary h-[50px] divide-x-2 divide-primary rounded-[10px] overflow-hidden items-center justify-between object-cover">
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
      <section className="container flex flex-wrap gap-4 mt-9 items-center justify-center">
        {dummyProducts.map((pd) => (
          <ProductCard
            {...pd}
            image={`/product/mens/mens-${pd.id}.png`}
            key={pd.id}
          />
        ))}
      </section>
    </main>
  );
};

const ProductCard = ({
  discount,
  rating,
  name,
  price,
  id,
  image,
}: ProductCardProps) => {
  const productCardRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref: productCardRef, once: false });
  const discountedPrice = price * (1 - discount / 100);
  const { setSelectedProduct, setOpenDesc } = useStateCtx();
  return (
    <div
      ref={productCardRef}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="w-[350px] h-[625px] rounded-2xl flex flex-col items-center justify-center overflow-hidden shadow-md shadow-primary/30 embla__slide"
    >
      <div className="w-full relative bg-[#CFD1DF] h-[400px]">
        <Image
          src={image}
          width={350}
          height={400}
          className="rounded-2xl object-cover w-full"
          alt="product"
        />
        <div className="ribbon-wrap">
          <div className="ribbon">{discount}% off </div>
        </div>
      </div>
      <div className="bg-[#E7E8EF] flex flex-col items-center justify-center h-full py-2 gap-1 w-full">
        <div className="flex w-[114px] items-center justify-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              className={cn(
                "h-[18px] w-[18px] shrink-0",
                index < rating ? "fill-amber-400" : "fill-gray-300"
              )}
              viewBox="0 0 256 256"
            >
              <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
            </svg>
          ))}
        </div>
        <span className="text-primary text-lg">{name}</span>
        <div className="flex w-[175px] h-[29px] items-center justify-center gap-2 ">
          <span className="text-primary text-2xl font-medium">
            &#x20A6;{discountedPrice}
          </span>
          <span className="line-through text-base text-[#A0A3BF]">{price}</span>
        </div>
        <Button
          className="w-[281px] h-[60px] text-center text-lg font-medium"
          variant="secondary"
          onClick={() => {
            setSelectedProduct(id);
            setOpenDesc(true);
          }}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

const TopSellingSection = () => {
  const ShopRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref: ShopRef, once: false });

  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <main
      ref={ShopRef}
      className={cn(
        "mt-8",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 mt-7"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="flex flex-col items-center justify-center w-full text-center">
        <div className="flex flex-col items-center justify-center w-full max-w-[671px]">
          <h2 className="uppercase text-pretty text-primary font-unica text-3xl md:text-6xl font-semibold">
            TOP SELLING PRODUCTS
          </h2>
          <span className="text-sm md:text-2xl text-primary/80 font-medium">
            Step into comfort and style with our top-selling wear, a favorite
            among trendsetters and fashion enthusiasts
          </span>
        </div>
      </div>
      <section className="md:container embla mt-9">
        <section className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container gap-4 py-3">
              {dummyProducts.map((pd) => (
                <ProductCard
                  {...pd}
                  image={`/product/mens/mens-${pd.id}.png`}
                  key={pd.id}
                />
              ))}
            </div>
          </div>
        </section>
        <div className="w-full justify-center  flex mt-4 lg:mt-8 gap-x-4">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </section>
    </main>
  );
};

const TopFeaturedSection = () => {
  const ShopRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref: ShopRef, once: false });
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);
  return (
    <main
      ref={ShopRef}
      className={cn(
        "mt-8",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 mt-7"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="flex flex-col items-center justify-center w-full text-center">
        <div className="flex flex-col items-center justify-center w-full max-w-[671px]">
          <h2 className="uppercase text-pretty text-primary font-unica text-3xl md:text-6xl font-semibold">
            TOP FEATURED PRODUCTS
          </h2>
          <span className="text-sm md:text-2xl text-primary/80 font-medium">
            Indulge in the pinnacle of fashion with our top featured product,
            meticulously crafted to embody sophistication and style
          </span>
        </div>
      </div>

      <section className="md:container embla mt-9">
        <section className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container gap-4 py-3">
              {dummyProducts.map((pd) => (
                <ProductCard
                  {...pd}
                  image={`/product/mens/mens-${pd.id}.png`}
                  key={pd.id}
                />
              ))}
            </div>
          </div>
        </section>
        <div className="w-full justify-center  flex mt-4 lg:mt-8 gap-x-4">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </section>
    </main>
  );
};

export {
  HeroSection,
  GranteeSection,
  GallerySection,
  ShopSection,
  TopSellingSection,
  TopFeaturedSection,
};
