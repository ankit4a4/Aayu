"use client";
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
    <div className="h-full relative z-[51]">
      <div className="mx-auto py-[20vh] px-3 md:py-[5vw] text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[90vh] md:max-w-[50vw]">
          {/* text */}
          <motion.h2
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[5vh] md:text-[4vw] font-bold text-black mb-[6vh] md:mb-[3vw]"
          >
            Let's <span className="text-black">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-[2vh] md:gap-[1vw] w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            data-netlify="true"
          >
            {/* input group */}
            <div className="flex flex-col md:flex-row gap-[2vh] md:gap-[1vw] w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input p-[0.7vh] md:p-[0.8vw] text-[2.2vh] md:text-[1.2vw] rounded-[1vh] md:rounded-[0.5vw] text-black  placeholder-black border-gray-400 focus:outline-none"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input p-[0.7vh] md:p-[0.8vw] text-[2.2vh] md:text-[1.2vw] rounded-[1vh] md:rounded-[0.5vw] text-black placeholder-black border border-gray-400 focus:outline-none"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input p-[0.7vh] md:p-[0.8vw] text-[2.2vh] md:text-[1.2vw] rounded-[1vh] md:rounded-[0.5vw] text-black border placeholder-black border-gray-400 focus:outline-none"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea p-[0.7vh] md:p-[0.8vw] text-[2.2vh] md:text-[1.2vw] rounded-[1vh] md:rounded-[0.5vw] text-black border h-[50px] md:h-auto placeholder-black border-gray-400 focus:outline-none"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <button
              type="submit"
              className="btn rounded-[5vh] md:rounded-[2vw] border border-black max-w-[40vh]  px-[10vh] md:px-[3vw] py-[2vh] md:py-[1vw] transition-all duration-300 flex items-center justify-center overflow-hidden mx-auto  placeholder-black hover:border-accent group relative text-[2.2vh] md:text-[1.2vw] text-black"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[3vh] md:text-[1.5vw]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
