import { DueDateReminderCard } from "../components/DueDateReminderCard.jsx";
import GetInTouch from "../components/GetInTouch.jsx";
import { LocationCard } from "../components/LocationCard.jsx";
import NewsCard from "../components/NewsItem.jsx";
import OurServices from "../components/OurServices.jsx";
import Slider from "../components/Slider.jsx";
import TeamSection from "../components/TeamSection.jsx";
import { Why } from "../components/Why.jsx";

export const Home = () => {
  return (
    <>
      <Slider />
      <OurServices />
      <Why />
      <TeamSection />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center 2sm:w-[240px] ">
        <h1 className="text-4xl font-bold py-7 pb-10 2sm:text-center 2sm:text-3xl ">
          News, Due Date Reminder, Location
        </h1>

        <div className="flex 2sm:flex-col gap-4">
          <NewsCard />
          <DueDateReminderCard />
          <LocationCard />
        </div>
      </div>
      <GetInTouch />
    </>
  );
};
