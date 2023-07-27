import ChannelBar from "./Components/ChannelBar";
import FriendsList from "./Components/FriendsList";
import Chat from "./Components/Chat";
import SideBar from "./Components/SideBar";

function App() {
  return <div className="flex ">
    <SideBar />
    <ChannelBar />
    <Chat />
    <FriendsList />
  </div>;
}

export default App;
