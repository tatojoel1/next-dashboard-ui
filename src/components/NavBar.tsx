import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const NavBar = async () => {
  const user = await currentUser();
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src={"/search.png"} alt="search" width={14} height={14} />
        <input
          type="text"
          name="search"
          id="searchBox"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* Icon and User */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-ful w-7 flex items-center justify-center cursor-pointer rounded-full">
          <Image
            src={"/message.png"}
            alt="notification"
            width={20}
            height={20}
          />
        </div>
        <div className="bg-white rounded-ful w-7 flex items-center justify-center cursor-pointer relative rounded-full">
          <Image
            src={"/announcement.png"}
            alt="notification"
            width={20}
            height={20}
          />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-sm">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Joel Hernandez</span>
          <span className="text-[10px] text-gray-500 text-right">
            {user?.publicMetadata.role as string}
          </span>
        </div>
        {/*<Image
          src={"/avatar.png"}
          alt="user"
          width={36}
          height={36}
          className="rounded-full"
        />*/}
        <UserButton />
      </div>
    </div>
  );
};

export default NavBar;
