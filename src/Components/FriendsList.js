const FriendsList = () => {
  const usernames = [
    "noahloke",
    "anelra",
    "JagDino",
    "IronGiant",
    "Zetyl",
    "isaii",
    "MONDPZ18",
    "HappyHolidays",
    "Drenzla",
    "angeliserami",
    "alterEd11",
    "OddFuture21",
    "kewinski",
  ];
  return (
    <div className="bg-gray-200 overflow-y-auto h-screen mr-1 w-80">
      <div className="px-2 pt-6">
        <h5 className=" friend-header">ONLINE - {usernames.length}</h5>
        {usernames.map((username) => (
          <Friend username={username} />
        ))}
        <div className="pt-6">
          <h5 className="friend-header">OFFLINE - 15</h5>
          {usernames.map((username) => (
            <Friend username={username} status={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Friend = ({ username, status }) => {
  return (
    <div className={status ? "opacity-40" : ""}>
      <div className="flex items-center cursor-pointer hover:bg-gray-400 p-1.5 rounded">
        <div className="relative bg-slate-400 w-8 h-8 rounded-full mr-2">
          <img src="https://robohash.org/W86.png?set=set1" className="rounded-full"/>
          <span class="absolute h-2 w-2 bottom-0 right-0 rounded-full bg-green-500 ring ring-gray-200"></span>
        </div>
        <h5 className="text-sm text-gray-500 font-semibold">{username}</h5>
      </div>
    </div>
  );
};

export default FriendsList;
