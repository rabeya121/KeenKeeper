import { useState, useContext } from "react";
import toast from "react-hot-toast";
import { TimelineContext } from "../../../layout/MainLayout";
import CallImg from "../../../assets/call.png";
import TextImg from "../../../assets/text.png";
import VideoImg from "../../../assets/video.png";




const FriendRightPanel = ({ friend }) => {
    const { timeline, addToTimeline } = useContext(TimelineContext);
    const friendTimeline = timeline.filter(
        (item) => item.friendId === friend.id
    );


    const handleAction = (type) => {
        const newEntry = {
            id: Date.now(),
            friendId: friend.id,
            date: new Date().toLocaleDateString(),
            type,
            title: `${type} with ${friend.name}`
        };

        addToTimeline(newEntry);
        toast.success(`${type} with ${friend.name}`);
    };

    return (
        <div className="md:col-span-2 space-y-4">


            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">


                <div className="bg-white p-5 rounded-xl shadow text-center">
                    <h2 className="text-2xl text-[#244D3F] font-bold">
                        {friend.days_since_contact}
                    </h2>
                    <p className="text-sm text-[#64748b] mt-2">
                        Days Since Contact
                    </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow text-center">
                    <h2 className="text-2xl text-[#244D3F] font-bold">
                        {friend.goal}
                    </h2>
                    <p className="text-sm text-[#64748b] mt-2">
                        Goal (Days)
                    </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow text-center">
                    <h2 className="text-base text-[#244D3F] font-2xl font-bold">
                        {friend.next_due_date}
                    </h2>
                    <p className="text-sm text-[#64748b] mt-2">
                        Next Due Date
                    </p>
                </div>

            </div>
            {/* ===================== RELATIONSHIP GOAL ===================== */}
            <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center min-h-[120px]">

                <div>
                    <h3 className="text-sm text-[#244D3F] font-semibold uppercase mb-2">
                        Relationship Goal
                    </h3>

                    <p className="text-base text-[#64748b]">
                        Connect every{" "}
                        <span className="font-semibold">{friend.goal} days</span>
                    </p>
                </div>

                <button className="px-5 py-2 text-sm bg-gray-100 font-semibold rounded-md hover:bg-gray-200 transition">
                    Edit
                </button>

            </div>

            {/* ===================== Quick Check-In ===================== */}
            <div className="bg-white p-5 rounded-xl shadow">

                <h3 className="text-sm font-semibold text-[#244D3F] uppercase mb-4">
                    Quick Check-In
                </h3>

                <div className="grid grid-cols-3 gap-4">


                    <button
                        onClick={() => handleAction("Call")}
                        className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition flex flex-col items-center justify-center gap-2"
                    >
                        <img src={CallImg} alt="Call" className="w-6 h-6" />
                        <span className="text-sm font-medium">Call</span>
                    </button>

                    <button
                        onClick={() => handleAction("Text")}
                        className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition flex flex-col items-center justify-center gap-2"
                    >
                        <img src={TextImg} alt="Text" className="w-6 h-6" />
                        <span className="text-sm font-medium">Text</span>
                    </button>

                    <button
                        onClick={() => handleAction("Video")}
                        className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition flex flex-col items-center justify-center gap-2"
                    >
                        <img src={VideoImg} alt="Video" className="w-6 h-6" />
                        <span className="text-sm font-medium">Video</span>
                    </button>

                </div>
            </div>

            {/* ===================== Recent Activity ===================== */}
            <div className="bg-white p-5 rounded-xl shadow">

                <h3 className="text-sm font-semibold text-[#244D3F] uppercase mb-4">
                    Recent Activity
                </h3>

                {timeline.length === 0 ? (
                    <p className="text-sm text-[#64748b]">
                        No activity yet
                    </p>
                ) : (
                    <div className="space-y-3">

                        {friendTimeline.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                            >
                                <div>
                                    <p className="font-medium text-sm">{item.title}</p>
                                    <p className="text-xs text-gray-400">{item.date}</p>
                                </div>

                                <div className="w-8 h-8 flex items-center justify-center">
                                    {item.type === "Call" && (
                                        <img src={CallImg} alt="Call" className="w-5 h-5" />
                                    )}

                                    {item.type === "Text" && (
                                        <img src={TextImg} alt="Text" className="w-5 h-5" />
                                    )}

                                    {item.type === "Video" && (
                                        <img src={VideoImg} alt="Video" className="w-5 h-5" />
                                    )}
                                </div>
                            </div>
                        ))}

                    </div>
                )}

            </div>

        </div>
    );
};

export default FriendRightPanel;