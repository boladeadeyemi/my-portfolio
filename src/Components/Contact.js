import React from "react";
import axios from "axios";

function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    try {
      const response = await axios.post(
        "https://formspree.io/f/myyaavby",
        new FormData(form)
      );
      window.alert(
        "Your message has been sent, you will be responded to shortly:",
        response.data
      );
      // Add any additional logic here (e.g., show success message)
    } catch (error) {
      console.error("Error submitting form:", error);
      // Add any error handling here (e.g., show error message
    }
  };

  return (
    <div className="w-full bg-[#F9F9F9] py-16 px-4" id="contactMe">
      <p className="md:ml-32 ml-5 font-Kaushan font-bold text-left md:text-3xl text-xl mb-4">
        Contact Me
      </p>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="max-w-[1240px] mx-auto grid md:grid-cols-2 md:grid-rows-2"
      >
        <div className="px-1 pb-5 ml-3 py-4">
          <input
            className=" border-b-2 mx-auto  w-[95%] py-4 pl-2"
            placeholder="Name* "
            type="text"
            name="name"
          />
        </div>
        <div className="px-1 pb-5 ml-3 py-4">
          <input
            className="border-b-2 mx-auto w-[95%] py-4 pl-2"
            placeholder="Phone*"
            type="text"
            name="Phone"
          />
        </div>
        <div className="px-1 pb-5 ml-3 py-4">
          <input
            className="border-b-2 mx-autox w-[95%] py-4 pl-2"
            placeholder="Email*"
            type="email"
            name="email"
          />
        </div>
        <div className="px-1 pb-5 ml-3 py-4">
          <input
            className="border-b-2 mx-autox w-[95%] py-4 pl-2"
            placeholder="Subject"
            type="text"
            name="subject"
          />
        </div>
        <div className="px-1 pb-5 ml-3 py-4">
          <textarea
            placeholder="Message"
            className="border-b-2 mx-autox w-[95%] py-8 pl-2"
            type="text"
            name="message"
          />
        </div>
        <div className="px-1 pb-5 ml-3 py-4">
          <button
            className="py-2 text-center bg-[#49bc56] w-[40%] md:text-sm sm:text-[0.9em] text-[0.7em] text-white font-Poppins ml-2"
            type="submit"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
