import { Outlet } from "react-router-dom";
import mainPic from "../../assets/images/Rectangle 1.png";
const Root = () => {
  //   .background {
  //     position: fixed;
  //     top: 0;
  //     left: 0;
  //     width: 100%;
  //     height: 100%;
  //     background: url('path/to/your/background.jpg') no-repeat center center fixed;
  //     background-size: cover;
  //     z-index: -1; /* Make sure the background is behind other elements */
  // }

  return (
    <>
      <div className="hero absolute w-full h-full left-0 top-0 bg-cover -z-10">
        <img src={mainPic} alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;
