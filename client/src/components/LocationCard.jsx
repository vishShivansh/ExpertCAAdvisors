import { Link } from "react-router-dom";

export const LocationCard = () => {
  return (
    <div
      className="flex-1 mx-2 bg-white shadow-lg rounded-lg overflow-hidden"
      style={{ height: "400px" }} // Adjust height as needed
    >
      <div className="bg-blue-500 p-4">
        <h3 className="text-xl font-bold text-white">Office Location</h3>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463.73036981567685!2d77.7043040845327!3d28.989109164004763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c658c2c04c501%3A0xed72286764f68b8!2sParakh%20Gupta%20And%20Co!5e0!3m2!1sen!2sin!4v1720210807776!5m2!1sen!2sin"
        width="100%"
        height="71%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-md"
      ></iframe>
      <Link
        to="ContactUs.aspx"
        className="block p-4 bg-gray-50 text-blue-500 text-start hover:bg-gray-100"
      >
        Read more...
      </Link>
    </div>
  );
};

export default LocationCard;
