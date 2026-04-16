import { useState } from "react";
import { useParams } from "react-router-dom";
import friendsData from "../../data/friends.json";
import FriendLeftPanel from "../FriendDetails/left/FriendLeftPanel";
import FriendRightPanel from "../FriendDetails/right/FriendRightPanel";
import { useEffect } from "react";

const FriendDetails = () => {
  useEffect(() => {
    document.title = "Friend Details | Keen Keeper";
  }, []);
  const { id } = useParams();

  const friend = friendsData.find(f => f.id === parseInt(id));

  const [timeline, setTimeline] = useState([]);


  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">

      <FriendLeftPanel friend={friend} />
      <FriendRightPanel friend={friend} timeline={timeline} setTimeline={setTimeline} />

    </div>
  );
};

export default FriendDetails;