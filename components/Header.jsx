import Image from "next/image";
import Link from "next/link";
import logo from "../public/photos/black.png";

import Socials from "../components/Socials";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter()
  return (
    <header className="absolute z-[59] w-full items-center px-[2vh] md:px-[2vw] h-[8vh] md:h-[8vw]">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-[2vh] md:gap-y-[2vw] py-[2vh] md:py-[2vw]">
          {/* logo with glass circle */}
          <Link href="/">
            <div className="relative cursor-pointer flex items-center justify-center rounded-full 
              bg-white/50 backdrop-blur-md border border-white/30 
              w-[10vh] h-[10vh] md:w-[7vw] md:h-[7vw] shadow-lg">
              <Image
                src={logo}
                alt="logo"
                width={60}
                height={30}
                priority
                onclick={() => router.push("/")}
                className="h-[6vh] md:h-[4vw] w-auto object-contain"
              />
            </div>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
