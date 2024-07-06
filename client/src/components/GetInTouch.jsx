import { useState } from "react";
import EnquiryImage from "../../public/enquery.jpg";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const { name, number, email, message } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Construct the mailto link with the form data
    const mailtoLink = `mailto:expertcaadvisors@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(
      message
    )}`;

    // Open the user's default email client with the pre-filled message
    window.location.href = mailtoLink;

    // Clear the form after submission
    setFormData({
      name: "",
      number: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center bg-white p-8 shadow-md">
          {/* Form Section */}
          <div className="w-full lg:w-1/2">
            <div className="text-center mb-8">
              <span className="text-lg">Send a Message</span>
              <h2 className="text-3xl font-bold">Get in Touch</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="number"
                  value={number}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Your Number"
                  maxLength="10"
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Your Email ID"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Type Your Message.."
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={EnquiryImage}
              alt="EnquiryImage"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
