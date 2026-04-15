
import { useState, useMemo, useEffect } from "react";
import friendsData from "../../../data/friends.json";
import FriendCard from "./FriendCard";

const FriendsSection = () => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const filteredAndSortedFriends = useMemo(() => {
    let data = [...friends];

    if (search.trim()) {
      data = data.filter((friend) =>
        friend.name.toLowerCase().includes(search.toLowerCase()) ||
        (friend.interactionType || "")
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    data.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return data;
  }, [search, sortOrder, friends]);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">

     
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h2 className="text-3xl font-bold">Your Friends</h2>

        <div className="flex flex-col md:flex-row gap-3 md:items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Search by name or interaction..."
            className="input input-bordered w-full md:w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="select select-bordered w-full md:w-44"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredAndSortedFriends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsSection;