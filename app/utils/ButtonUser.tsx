import Link from "next/link";
import { authSession } from "../libs/auth";

const ButtonUser = async () => {
  const user = await authSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className={user ? "flex justify-between items-center":""}>
        {
            user ? <Link className="bg-red-600 text-white py-2 px-4 rounded-md font-semibold" href="user/dashboard">Dashboard</Link> : null
        }
      <Link
        className="float-right bg-black rounded-md p-2 my-2 text-white font-semibold"
        href={actionUrl}
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default ButtonUser;
