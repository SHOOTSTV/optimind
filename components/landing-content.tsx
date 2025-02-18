"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const LandingContent = () => {
  const testimonials = [
    {
      name: "John Doe",
      avatar: "https://github.com/shadcn.png",
      title: "Software Engineer",
      description: "This is the best AI tool I've ever used!",
    },
    {
      name: "Jane Doe",
      avatar: "https://github.com/shadcn.png",
      title: "Software Engineer",
      description: "This is the best AI tool I've ever used!",
    },
    {
      name: "Jim Doe",
      avatar: "https://github.com/shadcn.png",
      title: "Software Engineer",
      description: "This is the best AI tool I've ever used!",
    },
  ];

  return (
    <div className="px-10 pb-20">
      <h2 className="mb-10 text-center text-4xl font-extrabold text-white">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {testimonials.map((item) => (
          <Card key={item.name} className="border-none bg-[#191919] text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm text-zinc-400">{item.title}</p>
                </div>
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
