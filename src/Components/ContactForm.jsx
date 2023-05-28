import { useRef } from "react";

const ContactForm = () => {
  const form = useRef();

  return (
    <div 
        className="w-full -mt-3 py-20 bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://i.ibb.co/Dw4YKqt/ALASICA.png')",
        }}
      >
      <form
        ref={form}
        className=" text-gray-100 w-full md:w-5/6 lg:w-1/2 mx-auto"
      >
        <div className="mb-4 mt-2">
          <input
            className="shadow appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="user_name"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="user_email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-4">
          <textarea
            className="shadow appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="6"
            placeholder="Enter your message"
            name="message"
          ></textarea>
        </div>
        <button
          type="submit"
          value="Send"
          className="w-full px-4 py-2 bg-[#ffcc1d] text-white font-bold rounded transition duration-300 hover:bg-[#ffcc1d] transform text-xl hover:scale-80"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
