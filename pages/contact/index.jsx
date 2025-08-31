import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Thank you. I will get back to you ASAP."))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="min-h-screen relative z-[51] w-full  flex items-center justify-center px-[3vh] md:px-[3vw]">
      <div className="w-full max-w-[90vw] md:max-w-[50vw] py-[8vh] md:py-[5vw] flex flex-col items-center">
        {/* heading */}
        <motion.h2
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-black text-[3vh] md:text-[2vw] font-bold mb-[4vh] md:mb-[2vw] text-center"
        >
          Let&apos;s <span className="text-accent">connect.</span>
        </motion.h2>

        {/* form */}
        <motion.form
          initial="hidden"
          animate="show"
          exit="hidden"
          onSubmit={handleSubmit}
          autoComplete="off"
          autoCapitalize="off"
          data-netlify="true"
          className="flex flex-col gap-[2vh] md:gap-[1.5vw] w-full"
        >
          {/* name + email */}
          <div className="flex flex-col md:flex-row gap-[2vh] md:gap-[1.5vw] w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full md:w-1/2 border border-black/40 rounded-[1vh] md:rounded-[0.5vw] px-[2vh] md:px-[1vw] py-[1.5vh] md:py-[0.8vw] text-black text-[2vh] md:text-[1vw] placeholder-black"
              disabled={isLoading}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="w-full md:w-1/2 border border-black/40 rounded-[1vh] md:rounded-[0.5vw] px-[2vh] md:px-[1vw] py-[1.5vh] md:py-[0.8vw] text-black text-[2vh] md:text-[1vw] placeholder-black"
              disabled={isLoading}
              required
            />
          </div>

          {/* subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full border border-black/40 rounded-[1vh] md:rounded-[0.5vw] px-[2vh] md:px-[1vw] py-[1.5vh] md:py-[0.8vw] text-black text-[2vh] md:text-[1vw] placeholder-black"
            disabled={isLoading}
            required
          />

          {/* message */}
          <textarea
            name="message"
            placeholder="Message..."
            className="w-full border border-black/40 rounded-[1vh] md:rounded-[0.5vw] px-[2vh] md:px-[1vw] py-[1.5vh] md:py-[0.8vw] h-[20vh] md:h-[10vw] resize-none text-black text-[2vh] md:text-[1vw] placeholder-black"
            disabled={isLoading}
            required
          />

          {/* button */}
          <button
            type="submit"
            disabled={isLoading}
            className="relative btn rounded-full border border-black/40 max-w-[40vh] md:max-w-[15vw] px-[3vh] md:px-[2vw] py-[1.5vh] md:py-[0.8vw] text-[2vh] md:text-[1vw] font-semibold text-black transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
          >
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              Let&apos;s talk
            </span>
            <BsArrowRight
              className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[2.5vh] md:text-[1.2vw]"
              aria-hidden
            />
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
