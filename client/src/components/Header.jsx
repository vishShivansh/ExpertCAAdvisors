import { Link } from "react-router-dom";
import envelopOpenLogo from "../../public/emaillogo.png";
import ExpertCAAdvisorsLogo from "../../public/Expert CA2.png";
import FaceBookLogo from "../../public/facebook-f.svg";
import phoneLogo from "../../public/phonelogo.png";
import TwitterLogo from "../../public/twitter.svg";
import WhatsappLogo from "../../public/whatsapp.svg";

export const Header = () => {
  return (
    <header className="relative h-full pb-[10px] bg-[#f4f6fc]">
      <div className="flex justify-between ">
        <div className=" p-6 left-20">
          <Link to={"/"}>
            <div className="flex items-center gap-5 w-[600px] 2sm:w-[250px]">
              <img
                src={ExpertCAAdvisorsLogo}
                alt="Expert CA Advisors"
                className="w-20 2sm:w-16"
              />
              <div className="flex flex-col">
                <span className="font-bold text-black text-5xl 2sm:text-3xl">
                  Expert CA
                </span>
                <span className="text-center font-bold text-[rgba(32,95,141,255)] text-2xl 2sm:text-base">
                  <span className="text-red-600">-----</span>ADVISORS{" "}
                  <span className="text-red-600">-----</span>
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="2sm:hidden absolute inset-0 left-[500px] w-3 bg-[#fde428] transform origin-bottom-right skew-x-12"></div>
        <div className="2sm:hidden absolute flex gap-5 items-center inset-0 left-[511px]  bg-[#006b63] transform origin-bottom-right skew-x-12">
          <img src={phoneLogo} alt="phone" className="ml-5" />
          <div className="flex flex-col">
            <span className="font-bold text-white">+91 7906260658</span>
            <span className="text-white">We are open 9:00 AM - 9:00 PM</span>
          </div>
          <div className="flex gap-5 px-8">
            <img
              src={envelopOpenLogo}
              alt="email"
              className="w-[40px] h-[40px]"
            />
            <div className="flex flex-col">
              <span className="font-bold text-white">
                expertcaadvisors@gmail.com
              </span>
              <span className="text-white">You can mail us</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Link>
              <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                <img src={WhatsappLogo} alt="Whatsapp" className="w-5" />
              </div>
            </Link>
            <Link>
              <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                <img src={FaceBookLogo} alt="FaceBook" className="w-5" />
              </div>
            </Link>
            <Link>
              <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                <img src={TwitterLogo} alt="Twitter" className="w-5" />
              </div>
            </Link>
          </div>
        </div>
        <div className="2sm:hidden absolute inset-0 left-[1400px] bg-[#006b63]"></div>
      </div>
    </header>
  );
};
