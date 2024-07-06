import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Header2 } from "./components/Header2.jsx";

import { Footer } from "./components/Footer.jsx";
import About from "./pages/About";
import { Career } from "./pages/Career";
import { ContactUs } from "./pages/ContactUs";
import { Home } from "./pages/Home";
import { NewsFeed } from "./pages/NewsFeed";

export default function App() {
  return (
    <BrowserRouter>
      <div className="2sm:flex 2sm:flex-row 2sm:items-center 2sm:justify-between 2sm:bg-[#f4f6fc]">
        <Header />
        <Header2 />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs.aspx" element={<About />} />
        <Route path="/NewsFeed.aspx" element={<NewsFeed />} />
        <Route path="/Career.aspx" element={<Career />} />
        <Route path="/ContactUs.aspx" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
