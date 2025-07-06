import { useEffect, useState } from "react";
import axios from "axios";
import { Eye, Heart } from "lucide-react";
import { CommentOutlined } from "@ant-design/icons";
import CommentNavbar from "./../../assets/components/blogs/index";
import Navbar from "../../assets/components/navbar";

interface Blog {
  _id: string;
  title: string;
  content: string;
  views: number;
  reaction_length: number;
  created_by: string; 
}

const stripHtml = (html: string): string => html.replace(/<[^>]*>?/gm, "");
const truncateText = (text: string, length: number): string =>
  text.length > length ? text.substring(0, length) + "..." : text;

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get<{ data: Blog[] }>(
        "https://beckend-n14-soqt.vercel.app/api/user/blog",
        {
          params: {
            access_token: "64bebc1e2c6d3f056a8c85b7",
            search: "",
          },
        }
      )
      .then((res) => {
        setBlogs(res.data.data);
        setFilteredBlogs(res.data.data);
      });
  }, []);

  const handleSelectBlog = (blog: Blog) => {
    setSelectedBlog(blog);
  };

  const handleBack = () => {
    setSelectedBlog(null);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(value) ||
        stripHtml(blog.content).toLowerCase().includes(value)
    );
    setFilteredBlogs(filtered);
  };

  return (
    <div className="w-[90%] m-auto">
      <Navbar/>
    <div className="container mx-auto px-4 py-6">
      {selectedBlog ? (
        <>
          <button
            onClick={handleBack}
            className="mb-4 text-red-600 underline hover:text-red-800"
          >
           EXIT
          </button>

          {selectedBlog.created_by && (
            <div className="mb-6">
              <CommentNavbar authorId={selectedBlog.created_by} />
            </div>


          )}

          <h1 className="text-2xl font-bold mb-4">{selectedBlog.title}</h1>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
          ></div>
        </>
      ) : (
        <>
          <div className="mb-6 flex justify-center">
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search blog title or content..."
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 rounded-r-md">
              🔍
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredBlogs.map((blog) => {
              const shortText = truncateText(stripHtml(blog.content), 250);
              return (
                <div
                  key={blog._id}
                  onClick={() => handleSelectBlog(blog)}
                  className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-md transition"
                >
                  <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
                  <p className="text-gray-700 text-sm">{shortText}</p>

                  <div className="flex justify-between items-center mt-4 text-gray-500 text-sm border-t pt-3">
                    <div className="flex items-center gap-1 text-[16px]">
                      <Eye className="w-4 h-4" /> {blog.views || 0}
                    </div>
                    <div className="flex items-center gap-1 text-[16px]">
                      <CommentOutlined /> {blog.reaction_length || 0}
                    </div>
                    <div className="flex items-center gap-1 text-[16px]">
                      <Heart className="w-4 h-4" /> {blog.reaction_length || 0}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default BlogPage;