import { useNavigate } from "react-router-dom";
import { Skeleton } from "antd";
import { useSingleUser } from "../../../hooks/tops/useSingleUser/useSingleUser";
import { useEffect, type FC } from "react";
import { useAuth } from "../compoens/index";

interface User {
  _id: string;
  name: string;
  surname: string;
  profile_photo?: string;
  followers?: string[];
  followings?: string[];
}

interface CommentNavbarProps {
  authorId: string;
}

const CommentNavbar: FC<CommentNavbarProps> = ({ authorId }) => {
  const { data, isLoading } = useSingleUser(authorId);

  useEffect(() => {
    console.log("Fetched user data:", data);
  }, [data]);

  const navigate = useNavigate();
  const { user: loggedInUser } = useAuth() as { user: User | null };

  const isCurrentUser = loggedInUser?._id === authorId;

  if (isLoading || !data) {
    return (
      <div className="flex items-center gap-3">
        <Skeleton.Avatar active size="large" />
        <Skeleton.Input active size="small" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between py-4">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate(`/user/${data._id}`)}
      >
        <img
          src={data.profile_photo || "/default-user.png"}
          className="w-[45px] h-[45px] rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-[16px]">
            {data.name} {data.surname}
          </h3>
          <p className="text-[12px] text-gray-500">
            Followers: {data.followers?.length ?? 0}
          </p>
        </div>
      </div>

      <div>
        {isCurrentUser ? (
          <button className="bg-[#46A358] text-white px-4 py-1 rounded-md" disabled>
            You
          </button>
        ) : (
          <button
            className="bg-[#46A358] text-white px-4 py-1 rounded-md"
            onClick={() => alert("Follow clicked!")}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentNavbar;
