import location1 from "../../assets/images/Sajek.png";
import location2 from "../../assets/images/Sreemongol.png";
import location3 from "../../assets/images/sundorbon.png";
import { FaArrowRightLong } from "react-icons/fa6";
const Content = () => {
  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* carusel */}
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                className="w-[270px] h-[416px] border-4 rounded-3xl border-yellow-400  "
                src={location1}
              />
              <div className=" mt-[430px] relative right-[180px] space-x-4">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img className="w-[270px] h-[416px]  " src={location2} />
              <div className=" mt-[430px] relative right-[180px] space-x-4">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            {/* 3 */}
            <div id="slide3" className="carousel-item relative w-full">
              <img className="w-[270px] h-[416px]  " src={location3} />
              <div className=" mt-[430px] relative right-[180px] space-x-4">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src={location1} className="w-[270px] h-[416px]  " />
              <div className=" mt-[430px] relative right-[180px] space-x-4">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-8xl text-white font-bold font-beb">
              Cox's bazar
            </h1>
            <p className="py-6 font-mont text-white">
              Cox's Bazar is a city, fishing port, tourism centre and district
              headquarters in southeastern Bangladesh. It is famous mostly for
              its long natural sandy beach, and it ...
            </p>
            <button className="btn btn-warning w-[160px]">
              Booking <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
