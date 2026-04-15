import { useContext } from "react";
import { TimelineContext } from "../../layout/MainLayout";
import { toast } from "react-hot-toast";

const QuickCheckIn = ({ friend }) => {

  const { addToTimeline } = useContext(TimelineContext);

  const handleClick = (type) => {
    const entry = {
      id: Date.now(),
      type,
      title: `${type} with ${friend.name}`,
      date: new Date().toLocaleDateString()
    };

    addToTimeline(entry);
    toast.success(`${type} added!`);
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h3 className="mb-4 font-semibold">Quick Check-In</h3>

      <div className="grid grid-cols-3 gap-4">

        <button onClick={() => handleClick("Call")} className="p-4 bg-gray-100 rounded">
          📞 Call
        </button>

        <button onClick={() => handleClick("Text")} className="p-4 bg-gray-100 rounded">
          💬 Text
        </button>

        <button onClick={() => handleClick("Video")} className="p-4 bg-gray-100 rounded">
          🎥 Video
        </button>

      </div>
    </div>
  );
};

export default QuickCheckIn;