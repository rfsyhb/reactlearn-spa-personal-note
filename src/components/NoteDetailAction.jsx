import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function NoteDetailAction({
  id,
  archivedStatus,
  onDelete,
  onArchive,
  onUnarchive,
}) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    onDelete(id);
    navigate('/');
  }

  const handleArchive = (id) => {
    onArchive(id);
    navigate('/');
  }

  const handleUnarchive = (id) => {
    onUnarchive(id);
    navigate('/');
  }

  return (
    <>
      {archivedStatus ? (
        <>
          <button onClick={() => handleDelete(id)}>Delete</button>
          <button onClick={() => handleUnarchive(id)}>Unarchive</button>
        </>
      ) : (
        <>
          <button onClick={() => handleDelete(id)}>Delete</button>
          <button onClick={() => handleArchive(id)}>Archive</button>
        </>
      )}
    </>
  );
}

NoteDetailAction.propTypes = {
  id: PropTypes.string.isRequired,
  archivedStatus: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
}

export default NoteDetailAction;
