import { useParams } from "react-router-dom";
import { Skeleton, Avatar } from "antd";
import { useAuthUser } from "react-auth-kit";
import { useAddFollow, useRemoveFollow } from "../../../hooks/tops/useuseraction";
import { useSingleUser } from "../../../hooks/tops/useSingleUser/useSingleUser";
import { FC, useState } from "react";
import Navbar from "../navbar";
import Footer from "../footer";

interface ProfileTabProps {
  label: string;
  count?: number;
  isActive: boolean;
  onClick: () => void;
}

const ProfileTab: FC<ProfileTabProps> = ({ label, count, isActive, onClick }) => (
  <button
    className={`py-2 px-4 text-sm font-semibold tracking-wide ${
      isActive ? "text-green-600 border-b-2 border-green-600" : "text-gray-600 hover:text-green-600"
    }`}
    onClick={onClick}
  >
    {label} {count !== undefined && `(${count})`}
  </button>
);

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useSingleUser(id || "");
  const loggedInUser = useAuthUser()();
  const { mutate: followUser } = useAddFollow();
  const { mutate: unfollowUser } = useRemoveFollow();

  const isCurrentUser = loggedInUser?._id === id;
  const isFollowing = loggedInUser?.followers?.includes(id || "");
  const [activeTab, setActiveTab] = useState("About");

  if (isLoading || !data) {
    return (
      <div className="w-full mx-auto">
        <Skeleton.Image active className="w-full h-48 mb-4" />
        <div className="relative w-[90%] mx-auto -mt-20 z-10">
          <Skeleton.Avatar active size={120} className="mb-4" />
          <Skeleton.Input active size="large" className="w-64 mb-2" />
          <Skeleton.Input active size="small" className="w-48" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-[90%] m-auto">
<Navbar/>
    <div className="w-full mt-[150px]">
      <div className="w-[90%] md:w-[90%] lg:w-[90%] mx-auto -mt-28 relative z-10  p-6 rounded-lg ">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Avatar
            src={data.profile_photo || "/default-user.png"}
            size={120}
            className="shadow-lg border-4 border-white"
          >
            {data.name?.[0]}
          </Avatar>

    <div className="flex flex-col md:flex-row justify-between items-start gap-4 w-full">
  {/* Chap tomonda user ma'lumotlari */}
  <div className="flex-1">
    <h1 className="text-3xl font-bold text-gray-800">
      {data.name} {data.surname}
    </h1>
    <p className="text-gray-500">@{data.username}</p>
    <p className="text-gray-700 italic mt-1">
      "{data.role?.toUpperCase() || "OBSERVER"}"
    </p>
    <p className="text-gray-600 mt-1">
      Followers: {data.followers?.length ?? 0}
    </p>
  </div>

  {/* O'ng tomonda buttonlar */}
  <div className="flex flex-wrap gap-2 justify-start md:justify-end">
    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm w-auto min-w-[100px]">
      Start chat
    </button>
    <button className="border border-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-100 text-sm w-auto min-w-[100px]">
      Send Invitation
    </button>

    {isCurrentUser ? (
      <button className="bg-gray-400 text-white px-4 py-2 rounded text-sm opacity-80 cursor-not-allowed w-auto min-w-[100px]">
        Siz
      </button>
    ) : isFollowing ? (
      <button
        onClick={() => unfollowUser({ id })}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm w-auto min-w-[100px]"
      >
        Unfollow
      </button>
    ) : (
      <button
        onClick={() => followUser({ id })}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm w-auto min-w-[100px]"
      >
        Follow
      </button>
    )}
  </div>
</div>

        </div>

        <div className="border-b mt-8 flex justify-center md:justify-start gap-6 mb-[20px]">
          <ProfileTab label="About" isActive={activeTab === "About"} onClick={() => setActiveTab("About")} />
          <ProfileTab label="Products" count={data.products?.length} isActive={activeTab === "Products"} onClick={() => setActiveTab("Products")} />
          <ProfileTab label="Posts" count={data.posts?.length} isActive={activeTab === "Posts"} onClick={() => setActiveTab("Posts")} />
          <ProfileTab label="Likes" count={data.likes?.length} isActive={activeTab === "Likes"} onClick={() => setActiveTab("Likes")} />
          <ProfileTab label="Followers" count={data.followers?.length} isActive={activeTab === "Followers"} onClick={() => setActiveTab("Followers")} />
        </div>

        {/* Tab Content */}
      {activeTab === "About" && (
  <div className="w-full space-y-4">
    <div className="text-start space-y-1">
      <h3 className="text-2xl font-bold text-gray-800">
        {data.name} {data.surname}
      </h3>
      <p className="text-gray-500 text-sm">@{data.username}</p>
      <p className="text-gray-600 text-sm italic">
        "{data.role?.toUpperCase() || 'OBSERVER'}"
      </p>
    </div>

    {/* Stats block */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-100 rounded-lg p-4 text-center">
      <div>
        <div className="flex flex-col items-center">
          <svg className="w-6 h-6 text-gray-700 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4-4a4 4 0 110-8 4 4 0 010 8zm6 4a4 4 0 100-8 4 4 0 000 8z" />
          </svg>
          <p className="text-xl font-bold text-gray-800">{data.followers?.length ?? 0}</p>
          <p className="text-gray-500 text-sm">Followers</p>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center">
          <svg className="w-6 h-6 text-gray-700 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <p className="text-xl font-bold text-gray-800">{data.wishlist?.length ?? 0}</p>
          <p className="text-gray-500 text-sm">Wishlist</p>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center">
          <svg className="w-6 h-6 text-gray-700 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <p className="text-xl font-bold text-gray-800">
            {data.created_at ? new Date(data.created_at).toLocaleDateString() : "N/A"}
          </p>
          <p className="text-gray-500 text-sm">Joined</p>
        </div>
      </div>
    </div>
    </div>
)}

      </div>
    </div>
    <Footer/>
  </div>
  );
};

export default ProfilePage;
