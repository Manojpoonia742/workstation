import Image from "next/image";
import imagesrc from "@/public/logo.png";

const Hero = () => {
  const Blogs = [
    {
      _id: 1,
      imageSrc: imagesrc,
      category: "Javascript",
      title: "How to install nodejs",
      date: "12/12/2024",
    },
    {
      _id: 2,
      imageSrc: imagesrc,
      category: "Linux",
      title: "How not to install nodejs",
      date: "12/12/2024",
    },
    {
      _id: 3,
      imageSrc: imagesrc,
      category: "Linux",
      title: "How not to install nodejs",
      date: "12/12/2024",
    },
  ];
  // grid md:grid-flow-col md:grid-cols-2 grid-flow-row
  return (
    <section className="flex flex-col items-center justify-center m-auto">
      <h1 className="mt-4 font-semibold text-4xl self-center">LATEST BLOGS</h1>
      <section className="m-10 gap-6 grid grid-flow-row md:grid-flow-col">
        {Blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white flex flex-col items-center justify-around rounded-lg w-72 h-96"
          >
            <Image
              src={blog.imageSrc}
              height={200}
              width={200}
              alt="blogImage"
            ></Image>
            <div className="flex flex-col gap-2">
              <span className=" bg-green-300 text-xs max-w-fit px-3 text-center py-1 rounded-full">
                {blog.category}
              </span>
              <h1 className=" text-xl font-semibold">{blog.title}</h1>
              <p className="">{blog.date}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Hero;
