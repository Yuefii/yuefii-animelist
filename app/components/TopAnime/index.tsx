import Image from "next/image";
import Link from "next/link";

interface TopAnimeProps {
  id: number;
  title: string;
  images: string;
}

const TopAnime: React.FC<TopAnimeProps> = ({ id, title, images }) => {
  return (
    <>
      <Link href={`/{id}`} className="cursor-pointer">
        <Image
          className="w-full h-[200px]"
          src={images}
          alt="img"
          width={200}
          height={200}
        />
        <h3 className="p-2 text-xs font-semibold">{title}</h3>
      </Link>
    </>
  );
};
export default TopAnime;
