"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  Image,
  MessageSquare,
  Music,
  Video,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-300",
    bgColor: "bg-violet-300/10",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: Image,
    color: "text-pink-300",
    bgColor: "bg-pink-300/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: Video,
    color: "text-orange-300",
    bgColor: "bg-orange-300/10",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-300",
    bgColor: "bg-emerald-300/10",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-300",
    bgColor: "bg-green-300/10",
    href: "/code",
  },
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          Explore the power of AI
        </h2>
        <p className="text-center font-light text-muted-foreground md:text-lg">
          Experience the power of AI with OptiMind
        </p>
      </div>
      <div className="space-y-4 px-4 md:px-20 lg:px-32">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="flex cursor-pointer items-center justify-between border-black/5 p-4 transition hover:shadow-md"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn(tool.bgColor, "p-2 w-fit rounded-md")}>
                <tool.icon className={cn(tool.color, "size-8")} />
              </div>
              <h2 className="font-bold">{tool.label}</h2>
            </div>
            <ArrowRight className="size-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
