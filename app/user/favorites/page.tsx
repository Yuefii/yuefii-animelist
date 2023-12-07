import Link from "next/link";
import Image from "next/image";
import HeaderUser from "@/app/utils/HeaderUser";

const page = () => {
  return (
    <>
      <div className="container mx-auto px-5">
        <HeaderUser title="My Favorite" />
        <div className="grid sm:grid-col-2 md:grid-col-3 lg:grid-cols-5 gap-2">
          <Link href="#!" className="relative border-2 border-black">
            <Image className="w-full" src="" alt="" width={350} height={350} />
            <div className="absolute flex items-center justify-center bottom-0 w-full bg-red-700 h-16">
              <div className="text-center text-white font-semibold">
                <h3>Judul Anime</h3>
                <p>Rating : </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
