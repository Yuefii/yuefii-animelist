import Link from "next/link";

interface HeaderProps {
  title: string;
  linkHref?: string;
  linkTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, linkHref, linkTitle }) => {
  return (
    <>
      <div className="flex justify-between items-center p-3 border-b border-black">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {linkHref && linkTitle ? (
          <Link
            href={linkHref}
            className="text-sm md:text-lg hover:underline hover:text-red-500 transition-all"
          >
            {linkTitle}
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default Header;
