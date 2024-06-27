import PropTypes from "prop-types";
export default function Bookmark({ blog }) {
  return (
    <div className="mt-5 bg-white p-5 rounded-lg">
      <p>{blog}</p>
    </div>
  );
}
Bookmark.propTypes = {
  blog: PropTypes.string.isRequired
};
