import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
  }

  onTitleChangeHandler = (event) => {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  };

  onBodyChangeHandler = (event) => {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  };

  onSubmitInputHandler = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
  };

  render() {
    return (
      <>
        <div className="add-new-page__input">
          <input
            id="input-title"
            className="add-new-page__input__title"
            type="text"
            placeholder="Note title ..."
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
          />
          <div
            className="add-new-page__input__body"
            type="text"
            data-placeholder="Note body ..."
            contentEditable
            onInput={this.onBodyChangeHandler}
          />
        </div>
        <div className="add-new-page__action">
          <button className="action" onClick={this.onSubmitInputHandler}>
            +
          </button>
        </div>
      </>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
