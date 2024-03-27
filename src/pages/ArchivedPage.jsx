import React from "react";
import { getArchivedNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import NotesList from "../components/NotesList";

function ArchivedPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  // mengambil keyword dari URL
  const keyword = searchParams.get("keyword");

  // set URL sesuai keyword
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <ArchivedPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class ArchivedPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      archivedNotes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };
  }

  onSearchChangeHandler = (keyword) => {
    this.setState(() => {
      return { keyword };
    });

    this.props.keywordChange(keyword);
  };

  render() {
    const filteredNotes = this.state.archivedNotes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section>
        <SearchBar
          title="Catatan yang di Arsipkan"
          keyword={this.state.keyword}
          keywordChange={this.onSearchChangeHandler}
        />
        <NotesList notes={filteredNotes} />
      </section>
    );
  }
}

export default ArchivedPageWrapper;