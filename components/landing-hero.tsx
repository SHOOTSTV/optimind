"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "./ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="space-y-5 py-36 text-center font-bold text-white">
      <div className="space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
        <h1>The Best AI Tool for</h1>
        <div className="bg-gradient-to-r from-[#E6E6FA] via-[#B19CD9] to-[#87CEEB] bg-clip-text text-transparent">
          Y
          <Typewriter words={["our Business", "our Life", "our Ideas"]} loop />
        </div>
      </div>
      <div className="text-sm font-light text-zinc-400 md:text-xl">
        Create content, generate images, and more with AI.
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="rounded-full p-4 font-semibold md:p-6 md:text-lg"
          >
            Start for Free
          </Button>
        </Link>
      </div>
      <div className="text-xs font-normal text-zinc-400 md:text-sm">
        No credit card required.
      </div>
    </div>
  );
};
