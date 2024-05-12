// note: may need to run 'vercel --prod' after pushing to main to get vercel to work
"use client";
import { Button } from "@nextui-org/react";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center">
      <p>hi there</p>
      <Button className="w-fit">Click Me</Button>
    </main>
  );
}
