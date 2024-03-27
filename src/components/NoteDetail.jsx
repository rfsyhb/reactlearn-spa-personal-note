import React from "react";
import NoteItem from "./NoteItem";
import NoteDetailAction from "./NoteDetailAction";
import PropTypes from "prop-types";

function NoteDetail({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
  onUnarchive,
}) {
  return (
    <>
      <h1 className="detail-page__title"></h1>
      <section className="detail-page__body">
        <p>
          {archived ? "Sebuah catatan yang diarsipkan" : "Sebuah catatan aktif"}
        </p>
        <NoteItem id={id} title={title} body={body} createdAt={createdAt} />
      </section>
      <section className="detail-page__action">
        <NoteDetailAction
          id={id}
          archivedStatus={archived}
          onDelete={onDelete}
          onArchive={onArchive}
          onUnarchive={onUnarchive}
        />
      </section>
    </>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default NoteDetail;
