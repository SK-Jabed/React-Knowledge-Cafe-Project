import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className="bg-white p-4 mx-6 mb-4 rounded-lg">
            <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;