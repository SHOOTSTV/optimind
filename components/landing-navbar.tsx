"use client";

import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const font = Montserrat({
  weight: ["600"],
  subsets: ["latin"],
});

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="flex items-center justify-between bg-transparent p-4">
      <Link href="/" className="flex items-center">
        <div className="relative mr-4 size-8">
          <Image src="/logo.png" alt="logo" fill />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Optimind
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
