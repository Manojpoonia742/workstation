import Image from "next/image";
import Linux from "@/public/linux2.png"
import Javascript from "@/public/jsl.png"

const Category = () => {
  const categories = [
    {
      _id: 1,
      name: "Javascript",
      imageUrl: Javascript,
    },
    {
      _id: 2,
      name: "Java",
      imageUrl: Linux,
    },
    {
      _id: 3,
      name: "Linux  ",
      imageUrl: Linux,
    }
  ];
  return (
    <section className="flex flex-col items-center justify-center m-auto">
      <h1 className="mt-4 font-semibold text-4xl self-center">CATEGORIES</h1>
      <section className="my-10 grid gap-10 md:grid-cols-2 min-w-[70vw]">
        {categories.map((category) => (
          <div key={category._id} className="flex items-center border-green-500 rounded-lg px-2 bg-green-200">
            <Image
              src={category.imageUrl}
              alt="logo"
              width={30}
              height={30}
              className="mx-10"
            ></Image>
            <span className=" border-l-2 py-3 pl-2 border-green-600">{category.name}</span>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Category;
