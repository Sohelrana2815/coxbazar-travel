import Navbar from "../Navbar/Navbar";

const Destination = () => {
  return (
    <>
      <Navbar></Navbar>
      {/*  */}
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-8xl font-bold font-beb">Cox's bazar</h1>
            <p className="py-6">
              Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
              known for its very long, sandy beachfront, stretching from Sea
              Beach in the north to Kolatoli Beach in the south. Aggameda Khyang
              monastery is home to bronze statues and centuries-old Buddhist
              manuscripts. South of town, the tropical rainforest of Himchari
              National Park has waterfalls and many birds. North, sea turtles
              breed on nearby Sonadia Island.
            </p>
          </div>
          {/* <div> */}
          {/* 1st option */}
          <div className="card shrink-0 h-96 w-full max-w-sm shadow-2xl bg-base-100 p-6">
            <h2 className="ml-3">Origin</h2>
            <select className="select w-full mx-auto max-w-xs bg-gray-200">
              <option disabled selected>
                Pick your Origin
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <div className="mt-10">
              <h2 className="ml-3">Destination</h2>
              <select className="select w-full mx-auto max-w-xs bg-gray-200">
                <option disabled selected>
                  Pick your Destination
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
              <button className="btn btn-warning w-full mt-16">
                Start Booking
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Destination;
