"use client"
import { Icons } from "@/data/data";
import { useEffect, useState } from "react";

const Picture = [
  { pos: '/images/1.jpeg' },
  { pos: '/images/2.jpeg' },
  { pos: '/images/3.jpeg' },
  { pos: '/images/4.jpeg' },
  { pos: '/images/5.jpeg' },
]

export default function Page() {
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * Picture.length);
    setRandomImage(Picture[randomIndex]?.pos);
  }, []);

  return (
    <div
      className="flex items-end justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      <div className="flex space-x-20 mb-6">

        {Icons.map((icon, index) => (
          <a href={icon.herf} className="flex flex-col items-center" key={index}>
            <icon.pos className="w-8 h-8 fill-zinc-200 stroke-zinc-200"/>
          </a>
        ))}

      </div>
    </div>
  );
}
