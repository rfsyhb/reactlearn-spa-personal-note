import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

function NotesList({ notes }) {
  if (!notes.length) {
    return (
      <section className="notes-list-empty">
        <p>There is no note added!</p>
      </section>
    );
  }

  return (
    <section className="notes-list">
      {notes.map((note) => {
        return <NoteItem key={note.id} {...note} />;
      })}
    </section>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NotesList;
