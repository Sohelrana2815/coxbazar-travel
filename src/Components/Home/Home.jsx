import Content from "../Content/Content";
import Navbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Content></Content>
      <h2 className="text-4xl font-beb font-bold">This is home!</h2>
    </div>
  );
};

export default Home;
