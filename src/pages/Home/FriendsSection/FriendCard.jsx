import { useNavigate } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  const statusStyle = {
    overdue: "bg-red-400 text-white",
    "almost due": "bg-[#efad44] text-white",
    "on-track": "bg-[#244D3F] text-white",
  };

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="
        bg-white rounded-2xl shadow-sm p-6 text-center
        cursor-pointer transition duration-300
        hover:shadow-lg hover:-translate-y-1
      "
    >
      
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
      />

      <h3 className="text-lg font-semibold">{friend.name}</h3>

      
      <p className="text-sm text-gray-500 mb-3">
        {friend.days_since_contact}d ago
      </p>

      <div className="flex justify-center gap-2 flex-wrap mb-3">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-green-200 text-green-600 text-xs px-3 py-1 rounded-full"
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

      <span
        className={`text-xs px-3 py-1 rounded-full ${statusStyle[friend.status]}`}
      >
        {friend.status}
      </span>
    </div>
  );
};

export default FriendCard;


