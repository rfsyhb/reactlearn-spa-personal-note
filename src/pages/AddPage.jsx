import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";
import NoteInput from "../components/NoteInput";

function AddPage() {
  const navigate = useNavigate();

  const onSubmitHandler = (note) => {
    addNote(note);

    navigate("/");
  };

  return (
    <section>
      <NoteInput addNote={onSubmitHandler} />
    </section>
  )
}

export default AddPage;
