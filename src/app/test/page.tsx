import { Icons } from "@/data/data";

const Picture = [
  { pos: '/images/1.jpeg' },
  { pos: '/images/2.jpeg' },
  { pos: '/images/3.jpeg' },
  { pos: '/images/4.jpeg' },
  { pos: '/images/5.jpeg' },
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
          <icon.pos className="w-8 h-8"/>
        </a>
        ))}
      </div>
    </div>
  );
}
