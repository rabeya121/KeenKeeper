

// import friendsData from "../../../data/friends.json";
// import FriendCard from "../../../components/ui/FriendCard";

// const FriendsSection = () => {

//   return (
//     <div className="px-4 md:px-10 py-10">
      
//       {/* Title */}
//       <h2 className="text-2xl font-bold mb-6">Your Friends</h2>

//       {/* Grid */}
//       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {friendsData.map((friend) => (
//           <FriendCard key={friend.id} friend={friend} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FriendsSection;

import friendsData from "../../../data/friends.json";
import FriendCard from "../../../components/ui/FriendCard";

const FriendsSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      
      <h2 className="text-2xl font-semibold mb-8">Your Friends</h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {friendsData.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsSection;
