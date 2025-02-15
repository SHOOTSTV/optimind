"use client";

import { cn } from "@/lib/utils";
import {
  CodeIcon,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FreeCounter } from "./free-counter";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "600",
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-300",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-300",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-300",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-300",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    href: "/music",
    color: "text-emerald-300",
  },
  {
    label: "Code Generation",
    icon: CodeIcon,
    href: "/code",
    color: "text-green-300",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-gray-300",
  },
];

interface SidebarProps {
  apiLimitCount: number;
}

const Sidebar = ({ apiLimitCount = 0 }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <div className="h-full flex-col space-y-4 bg-[#111827] py-4 text-white">
      <div className=" flex-1 px-3 py-2">
        <Link href="/dashboard" className="mb-14 flex items-center pl-3">
          <div className="relative mr-4 size-8">
            <Image src="/logo.png" fill alt="Logo" />
          </div>
          <h1 className={cn(montserrat.className, "text-2xl font-bold")}>
            OptiMind
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "group flex w-full cursor-pointer justify-start rounded-lg p-3 font-medium transition hover:bg-white/10 hover:text-white",
                pathname === route.href
                  ? "bg-white/10 text-white"
                  : "text-zinc-400"
              )}
            >
              <div className="flex flex-1 items-center">
                <route.icon className={cn("mr-3 size-5", route.color)} />

                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} />
    </div>
  );
};

export default Sidebar;
