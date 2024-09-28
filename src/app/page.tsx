"use client"
import { Icons } from "@/data/data";
import Image from "next/image";
import { useEffect, useState } from "react";

const Picture = [
  { pos: 'https://next-js-proj1.vercel.app/images/bg1.PNG' },
  { pos: 'https://next-js-proj1.vercel.app/images/bg2.PNG' },
  { pos: 'https://next-js-proj1.vercel.app/images/bg3.PNG' },
  { pos: 'https://next-js-proj1.vercel.app/images/bg4.PNG' },
  { pos: 'https://next-js-proj1.vercel.app/images/bg5.PNG' },
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
              <icon.pos className="w-6 h-6" />
            </a>
          ))}

        </div>
        <div>
          <Image width={500} height={500} src={'https://next-js-proj1.vercel.app/images/bg1.PNG'} alt="">

          </Image>
        </div>
      </div>

    </div>
  );
}
