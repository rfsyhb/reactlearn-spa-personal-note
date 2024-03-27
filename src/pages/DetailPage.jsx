import React from "react";
import NoteDetail from "../components/NoteDetail";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import { deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";

function DetailPageWrapper() {
  // mengambil id
  const { id } = useParams();

  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }

  onDeleteHandler = (id) => {
    deleteNote(id);

    this.setState(() => {
      return {
        note: "",
      };
    });
  };

  onArchiveHandler = (id) => {
    archiveNote(id);

    this.setState(() => {
      return {
        note: getNote(this.props.id),
      };
    });
  };

  onUnarchiveHandler = (id) => {
    unarchiveNote(id);

    this.setState(() => {
      return {
        note: getNote(this.props.id),
      };
    });
  };

  render() {
    if (!this.state.note) {
      return <p>Note is not found!</p>;
    }

    return (
      <section className="detail-page">
        <NoteDetail
          {...this.state.note}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onUnarchive={this.onUnarchiveHandler}
        />
      </section>
    );
  }
}

export default DetailPageWrapper;
