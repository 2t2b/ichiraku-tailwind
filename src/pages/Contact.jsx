
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form submitted: ", formData);
    alert("Thank you for contacting Ichiraku's Restaurant");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col justify-center text-[#496039] text-center items-center mx-auto">
      <p className="text-4xl mt-16 font-bold">Contact Us</p>

      <div className="mt-10 text-lg text-gray-700">
        <p>
          <strong>Address: </strong>
          Brgy. Tiguma, Pagadian City, Philippines
        </p>
        <p>
          <strong>Phone: </strong>
          (+63) 912-3456-789
        </p>
        <p>
          <strong>Email: </strong>
          info@Ichiraku.ph
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl mt-12 text-left mb-10 px-4"
      >
        <label
          htmlFor="name"
          className="block text-lg font-bold mb-2 text-black"
        >
          Name:
        </label>

        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-400 bg-white text-gray-700 placeholder-gray-400 mb-5 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <label
          htmlFor="email"
          className="block text-lg font-bold mb-2 text-black"
        >
          Email:
        </label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-400 bg-white text-gray-700 placeholder-gray-400 mb-5 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <label
          htmlFor="message"
          className="block text-lg font-bold mb-2 text-black"
        >
          Message:
        </label>

        <textarea
          id="message"
          name="message"
          placeholder="Enter your message..."
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-400 bg-white text-gray-700 placeholder-gray-400 mb-5"
        />

        <button
          type="submit"
          className="px-6 py-3 text-white font-medium bg-[#355120] rounded-lg transition-all ease-linear duration-[100ms] hover:bg-[#999] hover:text-black"
        >
          Send message
        </button>
      </form>
    </div>
  );
}

export default Contact;
