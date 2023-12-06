import { authSession } from "@/app/libs/auth";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authSession();
  return (
    <>
      <div className="container mx-auto">
        <div className="my-5 flex justify-center items-center">
          <Image
            className="border border-black rounded-full"
            src={user?.image || ""}
            alt="avatar"
            width={200}
            height={200}
          />
        </div>
        <div className="text-center font-semibold">
          <h1>Welcome</h1>
          <h1 className="text-2xl">{user?.name}</h1>
        </div>
        <div className="my-5 gap-2 flex justify-center items-center">
          <Link href="/user/favorite" className="bg-black text-white text-sm py-2 px-4 rounded-md font-semibold">
            My Favorite
          </Link>
          <Link href="/user/comment" className="bg-red-600 text-white text-sm py-2 px-4 rounded-md font-semibold">
            My Comment
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
