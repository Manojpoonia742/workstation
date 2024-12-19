import Link from "next/link";

const NavbarPriv = () => {
  const navOpt = [
    {
      index: 1,
      name: "Home",
      link: "/",
    },
    {
      index: 2,
      name: "Posts",
      link: "/",
    },
    {
      index: 3,
      name: "Collections",
      link: "/",
    },
    {
      index: 4,
      name: "Settings",
      link: "/",
    },
  ];
  return (
    <nav className="flex justify-between">
      <div>
        <nav className="w-80 h-full p-2 flex flex-col gap-4 rounded-r-md mt-1 text-white bg-green-950">
          <h1 className="text-3xl ">HI! USER</h1>
          <ul>
            {
                navOpt.map((opts)=>(
                    <li key={opts.index}><Link href={opts.link}>{
                        opts.name
                    }</Link></li>
                ))
            }
          </ul>
        </nav>
      </div>
      <button className="bg-green-900 px-4 py-2 h-12 m-2 rounded-md hover:bg-white text-white hover:text-black font-bold">
        <Link href={"/dashboard"}>Dashboard</Link>
      </button>
    </nav>
  );
};

export default NavbarPriv;
