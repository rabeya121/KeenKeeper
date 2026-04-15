const InfoCard = ({ friend }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-center space-y-3">

      <img src={friend.image} className="w-20 h-20 rounded-full mx-auto" />

      <h2 className="text-xl font-semibold">{friend.name}</h2>

      <span className="px-3 py-1 text-sm bg-red-100 text-red-500 rounded-full">
        Overdue
      </span>

      <div>
        <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full">
          FAMILY
        </span>
      </div>

      <p className="text-gray-500 text-sm italic">
        "Former colleague, great mentor"
      </p>

      <p className="text-sm text-gray-400">
        Preferred: {friend.email}
      </p>

      {/* ACTION BUTTONS */}
      <div className="space-y-2 pt-4">
        <button className="w-full p-2 bg-gray-100 rounded">⏰ Snooze 2 Weeks</button>
        <button className="w-full p-2 bg-gray-100 rounded">📦 Archive</button>
        <button className="w-full p-2 bg-red-100 text-red-500 rounded">🗑️ Delete</button>
      </div>

    </div>
  );
};

export default InfoCard;