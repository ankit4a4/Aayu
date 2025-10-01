"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const router = useRouter();

  const thinOutline = {
    color: "white",
    WebkitTextStroke: "0.3px black",
  };

  return (
    <section>
      {/* Left Sidebar */}
      <aside className="hidden md:flex fixed top-0 left-[-7%] h-[100vh] w-[20vw] bg-transparent flex-col items-center justify-between py-[6vh] z-[60]">
        {/* Top: Logo with Glass Circle */}
        <div
          className="cursor-pointer flex justify-center w-full"
          onClick={() => router.push("/")}
        >
          {/* Glass Circle */}
          <div className="w-[20vw] h-[20vw] md:w-[5vw] md:h-[5vw] rounded-full bg-white backdrop-blur-md flex items-center justify-center shadow-lg">
            <Image
              src="/photos/AayuLogo.png"
              alt="Logo"
              width={50}
              height={50}
              className="mx-auto h-[70%] w-[70%] object-contain"
            />
          </div>
        </div>

        {/* Center: Contact Info (Gmail + Phone) */}
        <div className="flex flex-col items-center justify-center flex-1 gap-[48vh] md:gap-[12vw]">
          <a
            href="mailto:aayuyogamrit@gmail.com"
            className="text-[2vh] md:text-[1vw] -rotate-90 whitespace-nowrap font-semibold tracking-widest"
            style={thinOutline}
          >
            aayuyogamrit@gmail.com
          </a>


          <a href="tel:919012757050"
            className="text-[2vh] md:text-[1vw] -rotate-90 whitespace-nowrap font-semibold tracking-widest"
            style={thinOutline}
          >
            +91 9012757050
          </a>
        </div>
      </aside>
    </section>
  );
};

export default Header;
