import React from "react";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import PropTypes from 'prop-types'

// Menambah regular karena class tidak bisa useSearchParams
function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  // melakukan set URL
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  // mengambil keyword dari URL
  const keyword = searchParams.get("keyword");

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

// class HomePage
class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };
  }

  onSearchChangeHandler = (keyword) => {
    // mengambil keyword dari SearchBar dan set untuk state
    this.setState(() => {
      return {
        keyword,
      };
    });

    // set URL
    this.props.keywordChange(keyword);
  };

  render() {
    const filteredNotes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section>
        <SearchBar
          title="Active Notes"
          keyword={this.state.keyword}
          keywordChange={this.onSearchChangeHandler}
        />
        <NotesList notes={filteredNotes} />
      </section>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
}

export default HomePageWrapper;
