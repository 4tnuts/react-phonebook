import React, { Component } from "react";
import EditContact from "../containers/editContact";
class ContactRow extends Component {
  constructor(props){
    super(props)
    this.state = {isEdit : false};
    this.changeToEdit = this.changeToEdit.bind(this);
    this.changeToRow = this.changeToRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }
  
  changeToEdit(event){
    event.preventDefault();
    this.setState({isEdit : true})
  }

  changeToRow(event){
    this.setState({isEdit : false});
  }

  deleteRow(){
    this.props.deleteContact(this.props.contact.id)
  }
  
  render() {
    const { name, phonenumber, no } = this.props.contact;
    if (this.state.isEdit === true) {
      return <EditContact contact={this.props.contact} editContact={this.props.editContact} changeToRow={this.changeToRow}/>;
    } else {
      return (
        <tr>
          <th scope="row">{no + 1}</th>
          <td>{name}</td>
          <td>{phonenumber}</td>
          <td>
            <button className="btn btn-outline-primary" onClick={this.changeToEdit}> Edit </button>&nbsp;
            <button className="btn btn-outline-danger" onClick={this.deleteRow}> Delete </button>
          </td>
        </tr>
      );
    }
  }
}

export default ContactRow;
