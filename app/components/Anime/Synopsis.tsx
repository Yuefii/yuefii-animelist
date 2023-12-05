"use client";
import { useState, useEffect } from "react";

interface AnimeData {
  synopsis: string;
}

const SynopsisComponent: React.FC<{ data: AnimeData }> = ({ data }) => {
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSynopsis = () => {
    setShowFullSynopsis(!showFullSynopsis);
  };

  useEffect(() => {
    const checkIfMobile = () => {
      return window.matchMedia("(max-width: 768px)").matches;
    };

    const handleResize = () => {
      setIsMobile(checkIfMobile());
    };

    setIsMobile(checkIfMobile());

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const synopsis = isMobile
    ? showFullSynopsis
      ? data.synopsis
      : `${data.synopsis.slice(0, 150)}...`
    : data.synopsis;

  return (
    <div className="border-2 border-black rounded-md p-4">
      <h3 className="text-lg font-semibold border-b border-black mb-2">
        Synopsis
      </h3>
      <p className="text-justify">
        {synopsis}
        {isMobile && !showFullSynopsis && (
          <button
            className="text-red-700 underline ml-2 cursor-pointer"
            onClick={toggleSynopsis}
          >
            Selengkapnya
          </button>
        )}
      </p>
    </div>
  );
};

export default SynopsisComponent;
