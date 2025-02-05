"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Icons } from "@/data/data";

const TOTAL_IMAGES = 100;

function getRandomIndex() {
  return Math.floor(Math.random() * TOTAL_IMAGES); // returns 0..99
}

function HomePageContent() {
  const [bgIndex, setBgIndex] = useState<number | null>(null);
  const hasInitialized = useRef(false);

  // Next.js App Router hook: read query params
  const searchParams = useSearchParams();
  const paramIndex = searchParams.get("bg"); // e.g. "12" if URL is /ans?bg=12

  useEffect(() => {
    if (!hasInitialized.current) {
      if (paramIndex) {
        const i = parseInt(paramIndex, 10);
        setBgIndex(i);
        window.history.replaceState({}, "", "/ans");
      } else {
        setBgIndex(getRandomIndex());
      }
      hasInitialized.current = true;
    }
  }, [paramIndex]);

  if (bgIndex === null) {
    return null; // Prevent rendering until bgIndex is set
  }

  const numString = String(bgIndex + 1).padStart(3, "0");
  const backgroundImage = `/images/ans_en/${numString}.png`;

  return (
  <div
  className="relative h-screen w-screen bg-cover bg-no-repeat m-0 p-0"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "100% 100%", // Ensures the image covers the full screen
    backgroundPosition: "center", // Centers the image properly
  }}
  >
    <a href={`/ans/cn?bg=${bgIndex}`}>
      <button className="absolute top-3 right-4 bg-zinc-200 text-gray-900 px-3 py-1 rounded-lg shadow-md opacity-60">
        中文
      </button>
    </a>

    <div className="flex items-end justify-center h-full">
        <div className="grid-cols-3 flex space-x-0 mb-6 justify-items-center">
          {Icons.map((icon, index) => (
            <a href={icon.herf} className="flex flex-col items-center" key={index}>
              <icon.pos className="w-32 h-8 fill-zinc-200 stroke-zinc-200" />
            </a>
          ))}
        </div>
      </div>
    </div>

  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageContent />
    </Suspense>
  );
}
