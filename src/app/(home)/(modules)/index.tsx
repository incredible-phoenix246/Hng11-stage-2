"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LifeBuoy, Plane, History } from "lucide-react";
import useMediaQuery from "@/hooks/use-media-query";

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
          <h2 className="text-3xl md:text-4xl text-center lg:text-[96px] font-semibold sm:font-bold lg:mb-8 font-unica">
            Discover Your Style
          </h2>
          <p className="w-full sm:max-w-[80%] text-center sm:font-medium text-base-white md:text-[28px] md:leading-8 text-base">
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
    <section className="container flex items-center justify-between py-4 overflow-hidden">
      <div className="min-[900px]:h-[120px] min-[500px]:h-[80px] h-[33.51px] [clip-path:polygon(0%_0%,_90%_0%,_100%_50%,_90%_100%,_0%_100%,_0%_0%)] bg-primary  text-base-white rounded-[16px] lg:w-[400px] min-[500px]:w-[300px] w-[133.65px] flex items-center justify-center py-2">
        <div className="flex lg:min-[900px]:w-[342px] md:w-[250px] w-[95px] min-[900px]:h-[82px] md:h-[50px] h-[25px] items-center justify-center text-[48px] gap-x-2">
          <Plane size={isMobile ? 24 : isTablet ? 32 : 40} strokeWidth={2} />
          {/* <Plane size={40} strokeWidth={1} /> */}
          <div className="flex flex-col text-center">
            <p className="text-base-white lg:text-4xl md:text-2xl text-base font-unica">
              Free Shiping
            </p>
            <span className="md:text-base lg:text-lg text-sm  font-semibold  text-neutral-300">
              In Order Min N300,000
            </span>
          </div>
        </div>
      </div>
      <div className="min-[900px]:h-[120px] h-[33.51px] min-[500px]:h-[80px] [clip-path:polygon(0%_0%,_100%_0%,_90%_50%,_100%_100%,_0%_100%,_10%_50%)] bg-secondary  text-base-white lg:w-[400px] min-[500px]:w-[300px] w-[133.65px] flex items-center justify-center">
        <div className="flex lg:min-[900px]:w-[342px] md:w-[250px] w-[95px] min-[900px]:h-[82px] md:h-[50px] h-[25px] items-center justify-center text-[48px] gap-x-2">
          <History size={isMobile ? 24 : isTablet ? 32 : 40} strokeWidth={2} />
          <div className="flex flex-col text-center">
            <p className="text-base-white lg:text-3xl md:text-2xl text-base font-unica">
              30-DAYS RETURN
            </p>
            <span className="md:text-base lg:text-lg text-sm  font-semibold  text-neutral-300">
              Moneyback Guaranteed
            </span>
          </div>
        </div>
      </div>
      <div className="min-[900px]:h-[120px] h-[33.51px] min-[500px]:h-[80px] [clip-path:polygon(10%_0%,_100%_0%,_100%_50%,_100%_100%,_10%_100%,_0%_50%)] bg-primary  text-base-white rounded-[16px] lg:w-[400px] min-[500px]:w-[300px] w-[133.65px] flex items-center justify-center">
        <div className="flex lg:min-[900px]:w-[342px] md:w-[250px] w-[95px] min-[900px]:h-[82px] md:h-[50px] h-[25px] items-center justify-center text-[48px] gap-x-2">
          <LifeBuoy size={isMobile ? 24 : isTablet ? 32 : 40} strokeWidth={2} />
          <div className="flex flex-col text-center">
            <p className="text-base-white lg:text-4xl md:text-2xl text-base font-unica">
              24/7 SUPPORT
            </p>
            <span className="md:text-base lg:text-[24px] text-sm  font-semibold  text-neutral-300">
              Lifeline Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection, GranteeSection };
