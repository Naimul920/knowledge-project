import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

export default function Bookmarks({blogs}) {
    //  console.log(blogs);
  return (
    <div className="w-1/4">
      <div className="border border-[#6047EC] bg-sky-100 rounded-2xl p-5">
        <h1 className="text-xl font-bold text-center text-[#6047EC]">Spent time on read : 177 min</h1>
      </div>
      <div className="mt-10 rounded-3xl border p-5 bg-slate-200">
        <h1>Bookmarked Blogs : 8</h1>
        {
            blogs.map((blog, index) => <Bookmark key={index} blog={blog}></Bookmark>)
        }
      </div>
    </div>
  );
}

Bookmarks.propTypes = {
    blogs: PropTypes.array.isRequired,
  };

