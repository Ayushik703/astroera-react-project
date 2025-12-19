import { Footer } from "../components/global/Footer";
import { Mobilenav } from "../components/global/Mobilenav";
import { Navbar } from "../components/global/Navbar";
import { Astrologer } from "../components/homepage/Astrologer";
import { Availability } from "../components/homepage/Availability";
import { Blogs } from "../components/homepage/Blogs";
import { Faq } from "../components/homepage/Faq";
import { Homebanner } from "../components/homepage/Homebanner";
import { Promises } from "../components/homepage/Promises";
import { Pujas } from "../components/homepage/Pujas";
import { Review } from "../components/homepage/Reviews";
import { Services } from "../components/homepage/Services";

export const Home = () => {
  return (
    <>
      <Homebanner />
      <Astrologer />
      <Services />
      <Pujas />
      <Promises />
      <Review />
      <Blogs />
      <Availability />
      <Faq />
    </>
  );
};
