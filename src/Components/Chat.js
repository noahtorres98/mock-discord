import { AiFillPlusCircle } from "react-icons/ai";

const Chat = () => {
  return (
    <div className="mr-1 flex flex-col pb-4 w-full">
      <div className="overflow-y-auto">
        <div className="pt-10 w-48 mx-auto text-center">
          <h1 className="font-bold text-3xl">Welcome to the server.</h1>
          <h5 className="text-xs text-gray-800 mt-4">
            This is the beginning of this server.
          </h5>
          <h5 className="text-gray-500 text-xs font-semibold mt-4">
            {new Date().toLocaleDateString()}
          </h5>
        </div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="pl-4 pr-3 flex items-center relative">
        <button className="absolute pl-5"><AiFillPlusCircle className="text-gray-500 hover:text-gray-600" size={'26'}/></button>
        <input
          className="bg-gray-100 w-full rounded pr-4 py-3 pl-16 placeholder:text-gray-500 text-gray-500 text-sm font-semibold focus:outline-none"
          placeholder="Message #general"
        />
      </div>
    </div>
  );
};

const Post = () => {
  return (
    <div className="flex mx-6 my-3 py-4 text-sm border-t border-gray-400">
      <div className="flex-none hover:cursor-pointer">
        <div className="bg-sky-800 w-10 h-10 rounded-full"></div>
      </div>
      <div className="ml-5">
        <PostHeader />
        <p className="text-sm">
          Just testing out how a normal post would look like.
        </p>
      </div>
    </div>
  );
};

const PostHeader = () => {
  return (
    <div className="flex items-center">
      <h5 className="font-semibold mr-2 hover:underline hover:cursor-pointer">
        noahloke
      </h5>
      <h5 className="text-gray-500 text-xs mr-2">
        {new Date().toLocaleDateString()}
      </h5>
      <h5 className="text-gray-500 text-xs">
        {new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </h5>
    </div>
  );
};

export default Chat;
