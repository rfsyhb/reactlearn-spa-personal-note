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
        body: event.target.value,
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
            className="add-new-page__input__title"
            type="text"
            placeholder="Note title ..."
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
          />
          <input
            className="add-new-page__input__body"
            type="text"
            placeholder="Note body ..."
            value={this.state.body}
            onChange={this.onBodyChangeHandler}
          />
          <button></button>
        </div>
        <div className="add-new-page__action">
          <button className="action" onClick={this.onSubmitInputHandler}>+</button>
        </div>
      </>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};
export default NoteInput;
