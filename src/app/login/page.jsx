import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="mx-auto flex flex-col items-center min-h-screen gap-10 justify-center">
      <div className="text-center">
        <h1 className=" font-bold text-3xl">WELCOME</h1>
        <h2 className=" font-thin text-2xl">Glad to see you again!</h2>
      </div>
      <div>
        <form
          action="/api/login"
          method="post"
          className="flex w-96 flex-col gap-4"
        >
          <div className="flex items-center border-2 border-black bg-white rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 m-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <input
              type="email "
              name="email "
              id="email "
              placeholder="Password"
              className="w-full h-full outline-none rounded-lg"
            />
          </div>

          <div className="flex items-center border-2 border-black bg-white rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 m-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full h-full outline-none rounded-lg"
            />
          </div>
          <div className="flex justify-between text-center items-center">
            <div className="flex gap-2">
              <input type="checkbox" name="remember" id="remember" />
              <span className="text-xs font-semibold text-center">
                Remember Me
              </span>
            </div>
            <Link href={"/"} className=" text-xs text-green-800 font-semibold">
              Forgot Password ?
            </Link>
          </div>
          <button
            className="p-3 rounded-lg text-white bg-green-700"
            type="submit"
          >
            LOGIN
          </button>
        </form>
      </div>
    </section>
  );
};

export default page;
