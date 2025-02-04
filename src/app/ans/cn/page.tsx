"use client"
import { Icons } from "@/data/data";
import { useEffect, useState } from "react";

const Picture = Array.from({ length: 100 }, (_, index) => {
  const num = String(index + 1).padStart(3, '0'); // Pad the number with leading zeros
  return { pos: `/images/ans_cn/${num}.png` };
});

function getRandomImage(): string {
  const randomIndex = Math.floor(Math.random() * Picture.length);
  return Picture[randomIndex].pos;
}

export default function HomePage() {
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  useEffect(() => {
    const randomImage = getRandomImage();
    setBackgroundImage(randomImage);
  }, []);

  if (!backgroundImage) {
    return null;
  }

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <a href="/ans">
        <button className="absolute top-3 right-4 bg-zinc-200 text-gray-900 px-3 py-1 rounded-lg shadow-md opacity-60">
        En
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
