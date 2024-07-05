import { Suspense } from "react";
import { Navbar } from "@/components/navigation";
import { SkeletonNavbar } from "@/components/skelton";
import { ProductDetails } from "./(modules)";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<SkeletonNavbar />}>
        <Navbar />
      </Suspense>
      {children}
      <ProductDetails />
    </>
  );
}
