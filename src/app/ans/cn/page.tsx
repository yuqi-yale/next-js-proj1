"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Icons } from "@/data/data";

const TOTAL_IMAGES = 100;

function getRandomIndex() {
  return Math.floor(Math.random() * TOTAL_IMAGES);
}

function HomePageContent() {
  const [bgIndex, setBgIndex] = useState<number | null>(null);
  const hasInitialized = useRef(false);

  const searchParams = useSearchParams();
  const paramIndex = searchParams.get("bg");

  useEffect(() => {
    if (!hasInitialized.current) {
      if (paramIndex) {
        const i = parseInt(paramIndex, 10);
        setBgIndex(i);
        window.history.replaceState({}, "", "/ans/cn");
      } else {
        setBgIndex(getRandomIndex());
      }
      hasInitialized.current = true;
    }
  }, [paramIndex]);

  if (bgIndex === null) return null;

  const numString = String(bgIndex + 1).padStart(3, "0");
  const backgroundImage = `/images/ans_cn/${numString}.png`;

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <a href={`/ans?bg=${bgIndex}`}>
        <button className="absolute top-3 right-4 bg-zinc-200 text-gray-900 px-3 py-1 rounded-lg shadow-md opacity-60">
          En
        </button>
      </a>
      <div className="flex items-end justify-center h-full">
        <div className="grid-cols-3 flex space-x-0 mb-32 justify-items-center">
          {Icons.map((icon, index) => (
            <a href={icon.herf} className="flex flex-col items-center" key={index}>
              <icon.pos className="w-32 h-8 fill-white stroke-white" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div></div>}>
      <HomePageContent />
    </Suspense>
  );
}
