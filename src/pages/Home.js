import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="Home">
      <Navigation />
      <Logo />
      <Countries />
    </div>
  );
};

export default Home;
