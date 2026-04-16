
import { useContext, useState } from "react";
import { TimelineContext } from "../../layout/MainLayout";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import { useEffect } from "react";
import CallImg from "../../assets/call.png";
import TextImg from "../../assets/text.png";
import VideoImg from "../../assets/video.png";

const Timeline = () => {

  useEffect(() => {
    document.title = "Timeline | Keen Keeper";
  }, []);
  const { timeline } = useContext(TimelineContext);

  const [filter, setFilter] = useState("All");

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  const getIcon = (type) => {
    switch (type) {
      case "Call":
        return <img src={CallImg} alt="Call" className="w-5 h-5" />;

      case "Text":
        return <img src={TextImg} alt="Text" className="w-5 h-5" />;

      case "Video":
        return <img src={VideoImg} alt="Video" className="w-5 h-5" />;

      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10">

      <h2 className="text-2xl font-bold mb-6">Timeline</h2>

      <div className="flex justify-between items-center mb-6">

        <div className="dropdown w-64">

          <div
            tabIndex={0}
            role="button"
            className="flex items-center justify-between input input-bordered w-full cursor-pointer"
          >
            <input
              type="text"
              placeholder="Filter Timeline"
              className="w-full text-black bg-transparent"
              readOnly
            />
            <FaChevronDown className="text-black" />
          </div>


          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-10 mt-2 w-full p-2 shadow"
          >

            <span className=" menu-title flex items-center text-[#64748b] gap-1">
              <FaCheck className='text-[#64748b]' />
              Filter Timeline
            </span>


            <li className="p-0">
              <div className="border-t my-1"></div>
            </li>

            <li><a onClick={() => setFilter("Call")}>Call</a></li>
            <li><a onClick={() => setFilter("Text")}>Text</a></li>
            <li><a onClick={() => setFilter("Video")}>Video</a></li>

          </ul>
        </div>

      </div>


      <div className="space-y-4">

        {filteredTimeline.length === 0 ? (
          <p className="text-gray-400 text-sm">
            No activity found
          </p>
        ) : (
          filteredTimeline.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded shadow flex items-center justify-between"
            >

              <div className="flex items-center gap-3">

                <div className="p-3 bg-gray-100 rounded-full">
                  {getIcon(item.type)}
                </div>

                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>

              </div>

              <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                {item.type}
              </span>

            </div>
          ))
        )}

      </div>

    </div >
  );
};

export default Timeline;