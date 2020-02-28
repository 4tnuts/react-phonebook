import React, { Component } from "react";

class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      name: '',
      phonenumber:''
    };

    this.handlerNameInput = this.handlerNameInput.bind(this);
    this.handlerPhonebookInput = this.handlerPhonebookInput.bind(this);
    this.saveContact = this.saveContact.bind(this);
  }
  
  componentDidMount(){
    this.setState({id : this.props.contact.id, name : this.props.contact.name, phonenumber : this.props.contact.phonenumber})
  }

  handlerNameInput(event){
    this.setState({name : event.target.value})
  }

  handlerPhonebookInput(event){
    this.setState({phonenumber : event.target.value})
  }

  saveContact(){
    this.props.editContact({id : this.state.id, name:this.state.name, phonenumber: this.state.phonenumber})
    this.props.changeToRow();
  }


  render() {
    return (  
      <tr>
        <th scope="row">{this.props.contact.no + 1}</th>
        <td>
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            value={this.state.name}
            onChange={this.handlerNameInput}
          />
        </td>
        <td><input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="Jane Doe"
            value={this.state.phonenumber}
            onChange={this.handlerPhonebookInput}
          /></td>
          <td><button className="btn btn-outline-success" onClick={this.saveContact}> Save</button></td>
      </tr>
    );
  }
}

export default EditContact;
