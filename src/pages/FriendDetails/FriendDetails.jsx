import InfoCard from "./InfoCard";
import StatsCard from "./StatsCard";
import QuickCheckIn from "./QuickCheckIn";

const FriendDetails = () => {

  const friend = {
    name: "Emma Wilson",
    email: "emma@mail.com",
    image: "https://i.pravatar.cc/150?img=5"
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">

      {/* LEFT */}
      <div className="md:col-span-1 space-y-4">
        <InfoCard friend={friend} />
      </div>

      {/* RIGHT */}
      <div className="md:col-span-2 space-y-4">
        <StatsCard />
        <QuickCheckIn friend={friend} />
      </div>

    </div>
  );
};

export default FriendDetails;
