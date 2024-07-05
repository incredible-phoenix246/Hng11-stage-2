import React from "react";
import {
  HeroSection,
  GranteeSection,
  GallerySection,
  ShopSection,
  TopSellingSection,
  TopFeaturedSection,
} from "./(modules)";

const page = () => {
  return (
    <>
      <HeroSection />
      <GranteeSection />
      <GallerySection />
      <ShopSection />
      <TopSellingSection />
      <TopFeaturedSection />
    </>
  );
};

export default page;
