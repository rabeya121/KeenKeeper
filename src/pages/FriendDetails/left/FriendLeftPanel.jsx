import {FiClock ,FiArchive ,FiTrash2} from "react-icons/fi";

const FriendLeftPanel = ({ friend }) => {
    return (
        <div className="md:col-span-1 space-y-4 md:sticky md:top-6 self-start">

            
            <div className="bg-white p-6 rounded-xl shadow text-center space-y-3">

                <img
                    src={friend.picture}
                    className="w-20 h-20 rounded-full mx-auto"
                    alt={friend.name}
                />

                <h2 className="text-lg font-semibold">{friend.name}</h2>

                
                <span className={`px-3 py-1 text-xs rounded-full ${
                    friend.status === "overdue"
                        ? "bg-red-500 text-white"
                        : friend.status === "almost due"
                            ? "bg-[#efad44] text-white"
                            : "bg-[#244D3F] text-white"
                }`}>
                    {friend.status}
                </span>

                <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {friend.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-gray-500 text-sm italic">
                    {friend.bio}
                </p>

               
                <p className="text-xs text-gray-400">
                    Preferred: {friend.email}
                </p>

            </div>

        
            <div className="space-y-2">

                <button className="w-full flex items-center justify-center
                 gap-2 py-2 bg-white rounded-lg shadow hover:shadow-md transition text-sm">
                    <FiClock /> Snooze 2 Weeks
                </button>

                <button className="w-full flex items-center justify-center
                 gap-2 py-2 bg-white rounded-lg shadow hover:shadow-md 
                 transition text-sm">
                    <FiArchive /> Archive
                </button>

                <button className="w-full flex items-center justify-center
                 gap-2 py-2 bg-white rounded-lg shadow hover:shadow-md 
                 transition text-sm text-red-500">
                    <FiTrash2 /> Delete
                </button>

            </div>

        </div>
    );
};

export default FriendLeftPanel;