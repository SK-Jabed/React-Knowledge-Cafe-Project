import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
       
        <div className="ml-4">
            <div className="mt-8">
                <h2 className="border-2 border-solid border-blue-600 p-6 bg-gray-100 rounded-lg text-xl font-semibold text-blue-600">Spent time on read : {readingTime} min</h2>
            </div>
            <div className="bg-gray-100 rounded-lg mt-8 p-6">
            <h2 className="text-2xl font-bold ">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;