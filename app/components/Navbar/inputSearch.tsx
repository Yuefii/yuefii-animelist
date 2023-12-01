"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleButtonSearch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const keyword = searchRef.current?.value;
    router.push(`/search/${keyword}`);
  };

  const handleInputSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleButtonSearch(event as any);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <input
          placeholder=" search anime..."
          className="px-4 rounded-l-md p-1.5"
          ref={searchRef}
          onKeyDown={handleInputSearch}
        />
        <button
          type="button"
          className="bg-red-500 p-1.5 rounded-r-md"
          onClick={handleButtonSearch}
        >
          <MagnifyingGlass size={24} />
        </button>
      </div>
    </>
  );
};

export default InputSearch;
