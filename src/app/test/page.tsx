import { Icons } from "@/data/data";

const Picture = [
  { pos: '/images/bg1.PNG' },
  { pos: '/images/bg2.PNG' },
  { pos: '/images/bg3.PNG' },
  { pos: '/images/bg4.PNG' },
  { pos: '/images/bg5.PNG' },
]

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * Picture.length);
  return Picture[randomIndex].pos;
}

export default function page() {
  const randomImage = getRandomImage();

  return (
    <div
      className="flex items-end justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      <div className="flex space-x-20 mb-16">

        {Icons.map((icon, index) => (
          <a href={icon.herf} className="flex flex-col items-center"  key={index}>
          <icon.pos className="w-6 h-6"/>
        </a>
        ))}

      </div>
    </div>
  );
}
