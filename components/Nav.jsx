import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "product", path: "/product", Icon: HiRectangleGroup },
  // { name: "work", path: "/work", Icon: HiViewColumns },
  // {
  //   name: "testimonials",
  //   path: "/testimonials",
  //   Icon: HiChatBubbleBottomCenterText,
  // },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col z-[53] items-center xl:justify-center gap-y-[2vh] xl:gap-y-[2vw] fixed h-max bottom-0 mt-auto xl:right-[2%] top-0 w-full xl:w-[4vw] xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-[2.5vh] xl:gap-y-[2vw] px-[5vh] md:px-[8vh] xl:px-0 h-[10vh] xl:h-max py-[2vh] xl:py-[2vw] border border-[#9b9b9b] bg-white/10 backdrop-blur-sm text-[4vh] xl:text-[1.2vw] xl:rounded-full">
        {navData.map((link, i) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link.path}
            key={i}
          >
            {/* tooltip */}
            <div
              role="tooltip"
              className="absolute pr-[4vh] xl:pr-[1.2vw] right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-[1vh] xl:p-[0.5vw] rounded-[0.5vh] xl:rounded-[0.3vw]">
                <div className="text-[1.7vh] md:text-[1.3vw] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                {/* triangle */}
                <div
                  className="border-solid border-l-white border-l-[1vh] xl:border-l-[0.6vw] border-y-transparent border-y-[0.8vh] xl:border-y-[0.4vw] border-r-0 absolute -right-[0.8vh] xl:-right-[0.4vw]"
                  aria-hidden
                />
              </div>
            </div>

            {/* icon */}
            <div>
              <link.Icon className="md:text-[1.8vw]" assria-hidden />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
