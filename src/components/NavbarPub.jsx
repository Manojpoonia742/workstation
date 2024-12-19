import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";

const NavbarPub = () => {
  return (
    <>
      <main className="flex items-center bg-green-300 justify-between mx-auto">
        <Link href={"/"}>
          <Image
            src={Logo}
            height={60}
            width={60}
            className="ml-2"
            alt="logo"
          ></Image>
        </Link>
        <div className="gap-2 flex mr-4">
          <button className="bg-green-900 px-4 py-2 rounded-md hover:bg-white text-white hover:text-black font-bold">
            <Link href={"/login"}>Login</Link>
          </button>
        </div>
      </main>
    </>
  );
};

export default NavbarPub;
