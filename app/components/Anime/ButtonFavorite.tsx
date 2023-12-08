"use client";

import { useState } from "react";

interface favoriteProps {
  mal_id: string;
  user_email: string;
  title: string;
  image: string;
}

const ButtonFavorite: React.FC<favoriteProps> = ({
  mal_id,
  user_email,
  title,
  image,
}) => {
  const [isCreated, setIsCreated] = useState(false);
  const handleButtonFavorite = async (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();

    const data = { mal_id, user_email, title, image };
    const result = await fetch("/api/v1/favorite", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const favorite = await result.json();
    if (favorite.status == 200) {
      setIsCreated(favorite.isCreated);
    }
  };
  return (
    <>
      {isCreated ? (
        <div>
          <p>has been added</p>
        </div>
      ) : (
        <div className="py-2">
          <button
            onClick={handleButtonFavorite}
            className="bg-black py-2 px-10 text-center rounded-md font-semibold text-white transition-all hover:bg-red-700"
          >
            Add to Favorite
          </button>
        </div>
      )}
    </>
  );
};

export default ButtonFavorite;
