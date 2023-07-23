import Banner from "../Banner/Banner";
import Update from "../Update/Update";
import Profile from "./Profile/Profile";
import Navbar from "./Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div className="container grid lg:grid-cols-9 grid-cols-1">
        {/* <div className="lg:block hidden">
          <Navbar/>
        </div> */}
        <div className="col-span-2">
          <Profile />
        </div>
        <div className="col-span-5">
          <Banner />
        </div>
        <div className="col-span-2">
          <Update />
        </div>
      </div>
      <div>
      <Navbar />
      </div>
    </div>
  );
};

export default Home;
