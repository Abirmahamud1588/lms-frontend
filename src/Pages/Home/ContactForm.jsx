import React from "react";

const ContactForm = () => {
  return (
    <div
      id="contact"
      className=" w-full md:w-2/3 rounded-lg shadow-md mx-auto my-12 px-7 py-12 bg-[#F2F8FE] "
    >
      <h2 className="text-2xl md:text-5xl font-bold  text-center mb-6">
        Contact Us
      </h2>

      <div className="flex flex-wrap -mx-4 ">
        <div className="w-full md:w-1/2 px-4 mb-10 md:mb-0">
          <p className=" mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in
            quibusdam, voluptas similique incidunt ipsa cumque nobis optio velit
            iste porro veniam assumenda labore quis! In nam assumenda aliquam
            rerum.
          </p>
          <div className="mb-6">
            <p className="font-bold">Our office:</p>
            <p>123 Street, Dhaka, BD</p>
          </div>
          <div className="mb-6">
            <p className="font-bold">Call us:</p>
            <p>+0109 345 6789</p>
          </div>
          <div className="mb-6">
            <p className="font-bold">Mail us:</p>
            <p>info@app.com</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <form>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4">
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-[#020DFF] text-white p-3 rounded  focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
