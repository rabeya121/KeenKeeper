const StatsCard = () => {
  return (
    <div className="grid grid-cols-3 gap-4">

      <div className="bg-white p-4 rounded-xl shadow text-center">
        <h2 className="text-2xl font-bold">62</h2>
        <p className="text-sm text-gray-500">Days Since Contact</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow text-center">
        <h2 className="text-2xl font-bold">30</h2>
        <p className="text-sm text-gray-500">Goal (Days)</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow text-center">
        <h2 className="text-lg font-bold">Feb 27, 2026</h2>
        <p className="text-sm text-gray-500">Next Due</p>
      </div>

    </div>
  );
};

export default StatsCard;