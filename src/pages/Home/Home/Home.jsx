import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Fetured from "../fetured/Fetured";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <PopularMenu />
      <Category />
      <Fetured />
      <Testimonials />
    </div>
  );
};

export default Home;

// video 74-7
