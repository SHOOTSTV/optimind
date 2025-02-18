"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("c02b0489-ab90-4083-9fa7-b9fb0f12ad1f");
  }, []);

  return null;
};
