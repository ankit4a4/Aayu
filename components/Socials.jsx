import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiWhatsappLine 
} from "react-icons/ri";

export const socialData = [
    {
    name: "Whatsapp",
    link: "#",
    Icon: RiWhatsappLine,
  },
  {
    name: "Instagram",
    link: "https://instagram.com",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://facebook.com",
    Icon: RiFacebookLine,
  }

];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-[2vh] md:gap-x-[2vw] text-[2.5vh] md:text-[1vw] md:pr-[2vw] relative z-[55]">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "ss"
              ? "bg-[#25d366]  rounded-full cursor-pointer z-50 p-[1vh] md:p-[1vw] hover:text-white"
              : "hover:text-accent z-[523232] cursor-pointer"
          } transition-all duration-300  cursor-pointer`}
        >
          <social.Icon
            aria-hidden
            className="text-[3vh] md:text-[2vw]" // icon sizing
          />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
