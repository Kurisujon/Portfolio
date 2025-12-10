import Introduction from "../Components/introduction/Introduction";
import Profile from "../Components/profile/Profile";
import WorkProcess from "../Components/workProcess/WorkProcess";
import Portfolio from "../Components/portfolio/Portfolio";
import Blog from "../Components/blog/Blog";
import Profession from "../Components/profession/Profession";
import Contact from "../Components/contact/Contact";
import Main from "../Layouts/Main";

const Home = () => {
  return (
    <Main>
      <div className="relative">
        <div className="introduction-profile-background">
          <div className="content">
            <Introduction />
            <Profile />
          </div>
        </div>
        <div className="bg-soft-white pt-30">
          <WorkProcess />
        </div>
        <Portfolio />
        <div className="blog-background">
          <Blog />
        </div>
        <div className="bg-soft-white">
          <Profession />
        </div>
        <Contact />
      </div>
    </Main>
  );
};

export default Home;
