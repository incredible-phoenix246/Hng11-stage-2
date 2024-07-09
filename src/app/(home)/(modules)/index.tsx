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
import { cn, decreaseQuantity, increaseQuantity, removeItem } from "@/utils";
import { ImageCardProps, Tabprops, ProductCardProps, CartItem } from "@/types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useStateCtx } from "@/context/StateCtx";
import { dummyProducts } from "@/constant";
import { setObjectToLocalStorage, getObjectFromLocalStorage } from "@/utils";
import { useToast } from "@/components/ui/use-toast";
import { useSearchParams } from "next/navigation";
import {
  Add,
  ArrowLeft2,
  ArrowRight2,
  CloseCircle,
  Minus,
} from "iconsax-react";
import Link from "next/link";

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
          {tabs.slice(1, 5).map((tab) => (
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
  { id: 7, label: "all", tab: "all" },
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
  const [currentTab, setcurrentTab] = useState<String>("all");

  const filteredProducts =
    currentTab === "all"
      ? dummyProducts
      : dummyProducts.filter((product) => product.category === currentTab);
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
                  ? "text-base-white bg-primary"
                  : "text-secondary"
              )}
            >
              <span>{tab.label}</span>
            </div>
          ))}
        </nav>
      </div>
      <section className="container flex flex-wrap gap-4 mt-9 items-center justify-center">
        {filteredProducts.map((pd) => (
          <ProductCard {...pd} key={pd.id} />
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
  category,
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
          src={`/product/${category}/${id}.png`}
          width={350}
          height={400}
          className="rounded-t-2xl object-cover w-full max-w-[350] max-h-[400]"
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
                <ProductCard {...pd} key={pd.id} />
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
                <ProductCard {...pd} key={pd.id} />
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

const ProductDetails = () => {
  const { isMobile } = useMediaQuery();
  const { openDesc, setOpenDesc, selectedProduct } = useStateCtx();
  const { toast } = useToast();

  const selectedProductDetails = dummyProducts.find(
    (p) => p.id === selectedProduct
  );

  if (!selectedProductDetails) {
    return;
  }

  const cart = getObjectFromLocalStorage<CartItem[]>("cart") || [];

  const addToCart = (product: ProductCardProps, size?: CartItem["size"]) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.id === product.id && item.size === size
    );

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      const newItem: CartItem = {
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        size: size,
        quantity: 1,
        discount: product.discount,
      };
      cart.push(newItem);
    }

    setObjectToLocalStorage("cart", cart);
    setOpenDesc(false);

    const event = new Event("localStorageUpdate");
    window.dispatchEvent(event);
  };

  return (
    <Sheet open={openDesc} onOpenChange={setOpenDesc}>
      <SheetContent
        className={cn(
          "w-full z-[150] overflow-hidden overflow-y-auto",
          isMobile &&
            "rounded-t-2xl max-h-[70vh] overflow-hidden overflow-y-auto"
        )}
        side={isMobile ? "bottom" : "right"}
      >
        <SheetHeader>
          <SheetTitle>Product Details</SheetTitle>
        </SheetHeader>
        <div className="w-full items-center justify-center flex flex-col mb-5">
          <Image
            src={`/product/${selectedProductDetails.category}/${selectedProductDetails.id}.png`}
            width={350}
            height={400}
            className="rounded-2xl object-cover w-full float-start max-h-[400px]"
            alt="product"
          />
          <h2 className="text-xl font-medium capitalize mt-5">
            {selectedProductDetails.name}
          </h2>
          <p className="text-sm font-normal">{selectedProductDetails.desc}</p>
        </div>
        <div className="mt-2 flex w-full items-center justify-center">
          {selectedProductDetails.sizes && (
            <div className="flex w-full items-center justify-between mx-auto max-w-[200px]">
              {selectedProductDetails.sizes.map((size) => (
                <Button
                  key={size}
                  variant="secondary"
                  onClick={() => {
                    addToCart(selectedProductDetails, size);
                    toast({
                      title: "Product added to cart",
                      description: `${selectedProductDetails.name} has been added to cart`,
                    });
                  }}
                >
                  {size}
                </Button>
              ))}
            </div>
          )}
        </div>
        <div className="flex w-full items-center justify-center mt-4">
          <Button
            className="w-[215px] h-[62px] text-center mt-4"
            variant="secondary"
            onClick={() => {
              addToCart(selectedProductDetails);
              toast({
                title: "Product added to cart",
                description: `${selectedProductDetails.name} has been added to cart`,
              });
            }}
          >
            Add To Cart
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const searchParams = useSearchParams().get("path");

  const [formState, setFormState] = useState<PaymentDetailsState>({
    email: "",
    cardHolder: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    billingAddress: "",
    billingState: "",
    billingZip: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  useEffect(() => {
    const getCart = () => {
      const cart = getObjectFromLocalStorage<CartItem[]>("cart");
      if (cart) {
        setCart(cart);
      }
    };

    getCart();

    const handleLocalStorageUpdate = () => {
      getCart();
    };

    window.addEventListener("localStorageUpdate", handleLocalStorageUpdate);
    return () => {
      window.removeEventListener(
        "localStorageUpdate",
        handleLocalStorageUpdate
      );
    };
  }, []);
  const isCart = searchParams === "cart";

  const fetchCart = () => {
    const cart = getObjectFromLocalStorage<CartItem[]>("cart");
    if (cart) {
      setCart(cart);
    }
  };

  const calculateSubtotal = () => {
    return cart.reduce(
      (acc, item) => {
        const itemTotal =
          (item.price - (item.price * item.discount) / 100) * item.quantity;
        acc.totalPrice += itemTotal;
        acc.totalQuantity += item.quantity;
        return acc;
      },
      { totalPrice: 0, totalQuantity: 0 }
    );
  };

  const { totalPrice, totalQuantity } = calculateSubtotal();
  const {
    email,
    cardHolder,
    cardNumber,
    cardExpiry,
    cardCvc,
    billingAddress,
    billingState,
    billingZip,
  } = formState;

  return (
    <section className="container flex flex-col">
      <div className="mt-5 flex items-center text-lg gap-0.5 ">
        <h2 className="text-lg capitalize text-primary">Home</h2>
        <ArrowRight2 />
        <h2 className={cn("text-lg capitalize", isCart && "text-secondary")}>
          {searchParams}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        {/* cart section */}
        <div className="flex flex-col md:w-1/2 w-full">
          <div className="flex w-full justify-between capitalize p-2 border-b border-primary text-base">
            <div className="w-1/2">
              <h2 className="text-2xl">Shopping Cart</h2>
            </div>
            <span>item</span>
            <span> quantity</span>
            <span>price</span>
          </div>

          {cart?.length > 0 ? (
            <div className="flex flex-col divide-y divide-primary w-full">
              {cart?.map((cart) => (
                <div
                  key={cart.id}
                  className="flex w-full justify-between items-center h-[140px]"
                >
                  <div className="flex items-center justify-center gap-0.5">
                    <button
                      className="text-center text-red-500"
                      onClick={() => {
                        removeItem(cart.id);
                        fetchCart();
                      }}
                    >
                      <CloseCircle />
                    </button>
                    <Image
                      src={`/product/${cart.category}/${cart.id}.png`}
                      width={75}
                      height={100}
                      className="object-cover"
                      alt="product"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-pretty capitalize text-2xl">
                      {cart.name}
                    </p>
                    <span className="text-red-500 text-xs">29 unit left</span>
                    {cart.size && (
                      <span className="text-sm">Size: {cart.size}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className="text-center text-primary items-center"
                      onClick={() => {
                        decreaseQuantity(cart.id, cart.size);
                        fetchCart();
                      }}
                    >
                      <Minus />
                    </button>
                    <span className="text-center text-lg">{cart.quantity}</span>
                    <button
                      className="text-center text-red-500"
                      onClick={() => {
                        increaseQuantity(cart.id, cart.size);
                        fetchCart();
                      }}
                    >
                      <Add />
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl text-primary">
                      {((cart.price * cart.discount) / 100) * cart.quantity}
                    </p>
                  </div>
                </div>
              ))}
              <div className="h-0.5 bg-primary w-full" />
              <div className="flex items-center justify-end py-5">
                <span className="text-2xl font-unica">
                  Subtotal: {totalQuantity}, &#x20A6;{totalPrice}
                </span>
              </div>
              <div className="h-0.5 bg-primary w-full" />
              <div className="flex w-full items-center justify-between mt-5">
                <Button asChild variant="ghost" className="w-[150px] shadow-md">
                  <Link href="/?path=home">
                    <ArrowLeft2 />
                    continue shoping
                  </Link>
                </Button>
                <span className="text-lg uppercase font-unica font-semibold">
                  Total
                </span>
                <span className="text-lg uppercase font-unica font-semibold">
                  &#x20A6;{totalPrice}
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center w-full h-full">
              your cart is empty start shoping
              <Button asChild variant="ghost" className="w-[150px] shadow-md">
                <Link href="/?path=home">
                  <ArrowLeft2 />
                  Start shoping
                </Link>
              </Button>
            </div>
          )}
        </div>

        <div className="mt-10 bg-primary px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium text-secondary">Payment Details</p>
          <p className="text-base-white">
            Complete your order by providing your payment details.
          </p>
          <div className="">
            <label
              htmlFor="email"
              className="mt-4 mb-2 block text-sm font-medium text-base-white"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="your.email@gmail.com"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-base-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor="card-holder"
              className="mt-4 mb-2 block text-sm font-medium text-base-white"
            >
              Card Holder
            </label>
            <div className="relative">
              <input
                type="text"
                id="card-holder"
                name="card-holder"
                onChange={handleChange}
                value={cardHolder}
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your full name here"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-base-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor="card-no"
              className="mt-4 mb-2 block text-sm font-medium text-base-white"
            >
              Card Details
            </label>
            <div className="flex">
              <div className="relative w-7/12 flex-shrink-0">
                <input
                  type="text"
                  id="card-no"
                  name="card-no"
                  value={cardNumber}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    className="h-4 w-4 text-base-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                name="credit-expiry"
                value={cardExpiry}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="MM/YY"
              />
              <input
                type="text"
                name="credit-cvc"
                value={cardCvc}
                onChange={handleChange}
                className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="CVC"
              />
            </div>
            <label
              htmlFor="billing-address"
              className="mt-4 mb-2 block text-sm font-medium text-base-white"
            >
              Billing Address
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-7/12">
                <input
                  type="text"
                  id="billing-address"
                  name="billing-address"
                  value={billingAddress}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Street Address"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <img
                    className="h-4 w-4 object-contain"
                    src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                    alt=""
                  />
                </div>
              </div>
              <select
                name="billing-state"
                value={billingState}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="State">State</option>
              </select>
              <input
                type="text"
                name="billing-zip"
                value={billingZip}
                onChange={handleChange}
                className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="ZIP"
              />
            </div>

            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-base-white">Subtotal</p>
                <p className="font-semibold text-base-white">
                  &#x20A6;{totalPrice}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-base-white">Shipping</p>
                <p className="font-semibold text-base-white">&#x20A6;1000.00</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-base-white">Total</p>
              <p className="text-2xl font-semibold text-base-white">
                &#x20A6;{totalPrice + 1000}
              </p>
            </div>
          </div>
          <button className="mt-4 mb-8 w-full rounded-md bg-secondary px-6 py-3 font-medium text-white">
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
};
export {
  HeroSection,
  GranteeSection,
  GallerySection,
  ShopSection,
  TopSellingSection,
  TopFeaturedSection,
  ProductDetails,
  CartPage,
};

interface PaymentDetailsState {
  email: string;
  cardHolder: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
  billingAddress: string;
  billingState: string;
  billingZip: string;
}
