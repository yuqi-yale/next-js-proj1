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
  const today = Date();
  return Date().split('202')[0];
}

function getRandomImage(): string {
  const randomIndex = Math.floor(Math.random() * Picture.length);
  return Picture[randomIndex].pos;
}

function encryptImageName(imageName: string): string {
  return window.btoa(imageName); // Base64 encode
}

function decryptImageName(encryptedImageName: string): string {
  return window.atob(encryptedImageName); // Base64 decode
}

export default function HomePage() {
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  useEffect(() => {
    const todayKey = getTodayDateKey();
    const storedEncryptedImageName = localStorage.getItem(todayKey);

    if (storedEncryptedImageName) {
      const decryptedImageName = decryptImageName(storedEncryptedImageName);
      setBackgroundImage(decryptedImageName);
    } else {
      const randomImage = getRandomImage();
      const encryptedImageName = encryptImageName(randomImage);
      localStorage.setItem(todayKey, encryptedImageName);
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
