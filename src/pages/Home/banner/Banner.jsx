import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-base-200 py-16 px-4">

      {/* Title */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 mt-4 text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        {/* Button */}
        <button className="btn btn-primary mt-6 gap-2 bg-[#244d3f] text-white border-none hover:bg-[#1f3f36]">
          <FaPlus />
          Add a Friend
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto">
        
        <div className="bg-white p-5 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold  text-[#244d3f]">10</h2>
          <p className="text-gray-500 text-sm">Total Friends</p>
        </div>

        <div className="bg-white p-5 rounded-xl text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold  text-[#244d3f]">3</h2>
          <p className="text-gray-500 text-sm">On Track</p>
        </div>

        <div className="bg-white p-5 rounded-xl text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold  text-[#244d3f]">6</h2>
          <p className="text-gray-500 text-sm">Need Attention</p>
        </div>

        <div className="bg-white p-5 rounded-xl text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold  text-[#244d3f]">12</h2>
          <p className="text-gray-500 text-sm">Interactions</p>
        </div>

      </div>
    </div>
  );
};

export default Banner;
