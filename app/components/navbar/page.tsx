import Link from "next/link"

const Navbar = () => {
    return (
        <>
        <header className="container mx-auto bg-black">
            <div className="flex md:flex-row flex-col gap-4 justify-center p-3">
                <Link href="/" className="text-white font-semibold uppercase text-center">Yuefii AnimeList</Link>
                <input placeholder=" search anime..." className="px-4" />
            </div>
        </header>
        </>
    )
}

export default Navbar