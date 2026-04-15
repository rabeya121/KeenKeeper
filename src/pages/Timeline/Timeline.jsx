import { useContext } from "react";
import { TimelineContext } from "../../layout/MainLayout";

const Timeline = () => {

  const { timeline } = useContext(TimelineContext);

  return (
    <div className="max-w-3xl mx-auto py-10">

      <h2 className="text-2xl font-bold mb-6">Timeline</h2>

      <div className="space-y-4">
        {timeline.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow flex gap-4">

            <div>
              {item.type === "Call" && "📞"}
              {item.type === "Text" && "💬"}
              {item.type === "Video" && "🎥"}
            </div>

            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Timeline;
