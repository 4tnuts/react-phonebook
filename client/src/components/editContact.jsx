import React, { Component } from "react";

class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name };
  }

  render() {
    return (
      <form class="form-inline">
        <label class="sr-only" for="inlineFormInputName2">
          Name
        </label>
        <input
          type="text"
          class="form-control mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Jane Doe"
        />

        <label class="sr-only" for="inlineFormInputGroupUsername2">
          Username
        </label>
        <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text">@</div>
          </div>
          <input
            type="text"
            class="form-control"
            id="inlineFormInputGroupUsername2"
            placeholder="Username"
          />
        </div>
        <input type="text" placeholder="Name" />
      </form>
    );
  }
}

export default EditContact;
