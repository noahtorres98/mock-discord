import ChannelBar from "./Components/ChannelBar";
import FriendsList from "./Components/FriendsList";
import Chat from "./Components/Chat";
import SideBar from "./Components/SideBar";
import Top from "./Components/Top";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col w-full">
        <Top />
        <div className="flex h-full">
          <ChannelBar />
          <Chat />
          <FriendsList />
        </div>
      </div>
      {/* <div className="bg-red-500 h-screen">sidebar</div>
      <div className="flex flex-col w-full">
        <div className="bg-green-500">top</div>
        <div className="flex h-full">
          <div className="bg-blue-500">channel bar</div>
          <div className="bg-orange-500 w-full">chat</div>
          <div className="bg-yellow-500">friends list</div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
