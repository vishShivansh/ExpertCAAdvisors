import { Link } from "react-router-dom"; // Ensure react-router-dom is correctly imported
import AboutUs from "../../public/about-us.jpg";

export const Why = () => {
  return (
    <div className="flex items-stretch justify-center">
      <div className="w-1/2">
        <img
          src={AboutUs}
          alt="AboutUs"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-1/2 p-8 bg-gray-100 flex flex-col justify-center">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">
            <span>Why You</span>
          </h3>
          <h2 className="text-3xl font-bold mb-4">Expert CA Advisors</h2>
          <p className="text-gray-700">
            At <strong>Expert CA Advisors</strong>, we are dedicated to
            providing comprehensive financial and accounting services tailored
            to meet the unique needs of each of our clients. With a legacy of
            excellence and a commitment to integrity, we have established
            ourselves as a trusted partner in the financial industry.
          </p>
          <Link
            to={"AboutUs.aspx"}
            className="block mt-4 text-blue-500 hover:underline"
          >
            Readmore
          </Link>
        </div>
      </div>
    </div>
  );
};
