import ChannelBar from "./Components/ChannelBar";
import FriendsList from "./Components/FriendsList";
import Chat from "./Components/Chat";
import SideBar from "./Components/SideBar";
import Top from "./Components/Top";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Top />
      <div className="flex flex-grow">
        <SideBar />
        <ChannelBar />
        <Chat />
        <FriendsList />
      </div>
    </div>
  );
}

export default App;
