import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
        <div className="text-center">
          <Image
            className="rounded-lg"
            src="/NotFound.jpg"
            alt="NotFound"
            width={300}
            height={300}
          />
          <div className="p-3">
            <h3 className="text-2xl font-bold">404 NOT FOUND</h3>
            <Link
              href="/"
              className="text-sm hover:underline hover:text-red-500"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotFound;
