"use client"
import { Icons } from "@/data/data";
import { useEffect, useState } from "react";

const Picture = Array.from({ length: 100 }, (_, index) => {
  const num = String(index + 1).padStart(3, '0'); // Pad the number with leading zeros
  return { pos: `/images/${num}.jpg` };
});

function getTodayDateKey() {
  const today = Date();
  return today.split('202')[0];
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
        <div className="grid-cols-3 flex space-x-2 mb-6 justify-items-center">

          {Icons.map((icon, index) => (
            <a href={icon.herf} className="flex flex-col items-center" key={index}>
              <icon.pos className="w-24 h-8 fill-zinc-200 stroke-zinc-200" />
            </a>
          ))}

        </div>
      </div>

    </div>
  );
}
