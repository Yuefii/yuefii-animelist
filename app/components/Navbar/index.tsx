import Link from "next/link";
import InputSearch from "./inputSearch";

const Navbar = () => {
  return (
    <>
      <header className="container mx-auto bg-black rounded-t-md">
        <div className="flex md:flex-row flex-col gap-4 justify-center items-center p-5">
          <Link
            href="/"
            className="text-white font-semibold uppercase text-center"
          >
            Yuefii AnimeList
          </Link>
          <InputSearch />
        </div>
      </header>
    </>
  );
};

export default Navbar;
