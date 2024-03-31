import PropTypes from "prop-types";

function SearchBar({ title, keyword, keywordChange }) {
  return (
    <div className="search-bar">
      <h2>{title}</h2>
      <input
        id="title"
        type="text"
        placeholder="Cari catatan ..."
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
