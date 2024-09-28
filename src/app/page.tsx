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

function getTodayDateKey() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * Picture.length);
  return Picture[randomIndex].pos;
}

export default function HomePage() {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const todayKey = getTodayDateKey();
    const storedImage = localStorage.getItem(todayKey);

    if (storedImage) {
      setBackgroundImage(storedImage);
    } else {
      const randomImage = getRandomImage();
      localStorage.setItem(todayKey, randomImage);
      setBackgroundImage(randomImage);
    }
  }, []);

  if (!backgroundImage) {
    return null;
  }

  return (
    <div>
      <div
        className="flex items-end justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex space-x-20 mb-16">

          {Icons.map((icon, index) => (
            <a href={icon.herf} className="flex flex-col items-center" key={index}>
              <icon.pos className="w-8 h-8 fill-zinc-200" />
            </a>
          ))}

        </div>
      </div>

    </div>
  );
}
