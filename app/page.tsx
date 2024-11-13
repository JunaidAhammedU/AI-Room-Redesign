import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import Link from "next/link";
import { FaGoogle, FaPaypal } from "react-icons/fa";
import { PiMagicWandBold } from "react-icons/pi";
import Footer from "./dashboard/_components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="grid-background opacity-[0.3]"></div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#c144e7] to-[#301ed6] opacity-50"
          />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-5 py-12 md:py-24">
          <div className="lg:flex-grow md:w-1/2 md:ml-8 lg:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
            <h1 className="mb-5 sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 whitespace-nowrap">
              Welcome to{" "}
              <span className="font-extrabold">
                Artifex.
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2e1065] to-pink-900">
                  ai
                </span>
              </span>
            </h1>
            <p className="mb-4 max-w-lg sm:text-lg text-gray-600">
              Get ready to be surprised! AI can transform your space in ways you
              never thought possible. Visualize, design, and bring your dream
              home to life with just a few clicks. Let the AI magic happen and
              discover a personalized sanctuary that exceeds your wildest
              expectations.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="/dashboard">
                <Button className="mr-4 p-3 sm:p-4 md:p-5 text-base md:text-lg">
                  Go to Dashboard
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 ml-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              src="/landing.comparison.png"
              alt="hero image"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <section className="mx-auto ">
          <div className="container px-5 mx-auto lg:px-24 mt-10">
            <div className="flex flex-col w-full mb-4 text-left lg:text-center">
              <h1 className="mb-8 text-3xl Avenir font-semibold text-black">
                Trusted by
              </h1>
            </div>
            <div className="flex justify-center space-x-4 sm:space-x-8">
              <div className="flex items-center gap-1">
                <FaGoogle className="w-8 h-8" />
                <h1>Google</h1>
              </div>
              <div className="flex items-center gap-1">
                <FaPaypal className="w-8 h-8" />
                <h1>PayPal</h1>
              </div>
            </div>
          </div>
        </section>

        <div className="grr max-w-7xl pt-20 mx-auto text-center my-20 px-4">
          <div className="flex items-center justify-center relative">
            <h1 className="mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl Avenir font-semibold text-gray-900">
              AI Magic
            </h1>
            <PiMagicWandBold className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl absolute right-[10%] sm:right-[20%] md:right-[30%] lg:right-[37%] bottom-[30%] sm:bottom-[35%] md:bottom-[40%]" />
          </div>
          <h1 className="mb-8 text-lg sm:text-xl md:text-2xl lg:text-2xl Avenir font-semibold text-gray-600 text-center">
            {/* Additional optional description text here */}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center">
            <div>
              <Image
                src={"/Room1.jpg"}
                alt="Modern"
                className="shadow-lg rounded-lg hover:cursor-pointer hover:scale-105 transform translate duration-300"
                width={400}
                height={300}
              />
              <h2 className="text-lg sm:text-xl text-gray-500 mt-2">Modern</h2>
            </div>
            <div>
              <Image
                src={"/Room2.jpg"}
                alt="Contemporary"
                className="shadow-lg rounded-lg hover:cursor-pointer hover:scale-105 transform translate duration-300"
                width={400}
                height={300}
              />
              <h2 className="text-lg sm:text-xl text-gray-500 mt-2">
                Contemporary
              </h2>
            </div>
            <div>
              <Image
                src={"/Room3.jpg"}
                alt="Bohemian"
                className="shadow-lg rounded-lg hover:cursor-pointer hover:scale-105 transform translate duration-300"
                width={400}
                height={300}
              />
              <h2 className="text-lg sm:text-xl text-gray-500 mt-2">
                Bohemian
              </h2>
            </div>
            <div>
              <Image
                src={"/Room4.jpg"}
                alt="Minimal"
                className="shadow-lg rounded-lg hover:cursor-pointer hover:scale-105 transform translate duration-300"
                width={400}
                height={300}
              />
              <h2 className="text-lg sm:text-xl text-gray-500 mt-2">Minimal</h2>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
