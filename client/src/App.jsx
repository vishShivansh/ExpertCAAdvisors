import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import { Career } from "./pages/Career";
import { ContactUs } from "./pages/ContactUs";
import { Home } from "./pages/Home";
import { NewsFeed } from "./pages/NewsFeed";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs.aspx" element={<About />} />
        <Route path="/NewsFeed.aspx" element={<NewsFeed />} />
        <Route path="/Career.aspx" element={<Career />} />
        <Route path="/ContactUs.aspx" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}
