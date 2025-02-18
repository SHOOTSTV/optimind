"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useProModal } from "@/hooks/use-pro-modal";
import { cn } from "@/lib/utils";
import axios from "axios";
import {
  Check,
  Code,
  Image,
  MessageSquare,
  Music,
  Video,
  Zap,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-300",
    bgColor: "bg-violet-300/10",
  },
  {
    label: "Image Generation",
    icon: Image,
    color: "text-pink-300",
    bgColor: "bg-pink-300/10",
  },
  {
    label: "Video Generation",
    icon: Video,
    color: "text-orange-300",
    bgColor: "bg-orange-300/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-300",
    bgColor: "bg-emerald-300/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-300",
    bgColor: "bg-green-300/10",
  },
];

export const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      console.error(error, "STRIPE_ERROR");
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col  items-center justify-center gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 py-1 font-bold">
              Upgrade to Pro
              <Badge variant="premium" className="py-1 text-sm uppercase">
                Pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="py-2 text-center font-medium text-zinc-900">
            Gain unlimited access to all our features!
          </DialogDescription>
          <div className="space-y-2 pt-2">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="flex items-center justify-between border-black/5 p-3"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("size-6", tool.color)} />
                  </div>
                  <div className="text-sm font-semibold">{tool.label}</div>
                </div>
                <Check className="size-5 text-primary" />
              </Card>
            ))}
          </div>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="premium"
            size="lg"
            className="w-full"
            onClick={onSubscribe}
            disabled={loading}
          >
            Upgrade
            <Zap className="ml-2 size-4 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
