import Link from "next/link";
import Image from "next/image";
import HeaderUser from "@/app/utils/HeaderUser";
import { authSession } from "@/app/libs/auth";
import prisma from "@/app/libs/prisma";

const page = async () => {
  const user = await authSession();
  const favorite = await prisma.favorite.findMany({
    where: {
      user_email: user?.email as string,
    },
  });
  return (
    <>
      <div className="container mx-auto px-5">
        <HeaderUser title="My Favorite" />
        <div className="grid grid-col-2 lg:grid-cols-5 gap-2">
          {favorite.map((data, index) => {
            return (
              <Link
                key={index}
                href={`/anime/${data.mal_id}`}
                className="border-2 border-black"
              >
                <Image
                  className="w-full h-[300px]"
                  src={data.image as string}
                  alt="image"
                  width={350}
                  height={350}
                />
                <div className="flex items-center justify-center bottom-0 w-full bg-red-700 h-16">
                  <div className="text-center text-white font-semibold">
                    <h3>{data.title}</h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
