import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
export default function Blog({ blog, handelAddToBookmark}) {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="p-5">
      <img
        src={cover}
        alt={`Cover picture of the title ${title}`}
        className="rounded-3xl"
      />
      <div className="flex justify-between p-5">
        <div className="flex">
          <img src={author_img} alt="" className="w-14 rounded-full" />
          <div className="ml-5">
            <h1>{author}</h1>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex ">
          <p className="mr-5">{reading_time} read</p>
          <button onClick={()=>handelAddToBookmark(title)} ><CiBookmark  className="text-2xl"/></button>
        </div>
      </div>
      <div className="leading-relaxed">
        <h1 className="text-3xl">{title}</h1>
        <p>{hashtags}</p>
        <button className="text-[#6047EC] underline">Mark as read</button>
      </div>
    </div>
  );
}
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
