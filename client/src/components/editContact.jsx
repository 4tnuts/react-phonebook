import React, { Component } from "react";

class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.contact.name,
      phonenumber: this.props.contact.phonenumber,
      isEdit: this.props.contact.isEdit
    };
  }

  render() {
    return (  
      <tr>
        <th scope="row">{this.props.contact.no + 1}</th>
        <td>
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            id="inlineFormInputName2"
            value={this.state.name}
          />
        </td>
        <td><input
            type="text"
            className="form-control mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="Jane Doe"
            value={this.state.phonenumber}
          /></td>
          <td><button className="btn btn-outline-success"> Save</button></td>
      </tr>
    );
  }
}

export default EditContact;
