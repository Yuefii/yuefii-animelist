"use client";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

interface HeaderUserProps {
  title: string;
}

const HeaderUser: React.FC<HeaderUserProps> = ({ title }) => {
  const router = useRouter();
  const handleBack = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    router.back();
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <button onClick={handleBack}>
          <ArrowCircleLeft size={30} />
        </button>
        <h3 className="text-2xl font-semibold my-3">{title}</h3>
      </div>
    </>
  );
};

export default HeaderUser;
