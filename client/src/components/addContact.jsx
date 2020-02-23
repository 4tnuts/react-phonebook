import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = { contact : { name: "", phonenumber: ""} , isChanged: false };

    this.changeAdd = this.changeAdd.bind(this);
    this.cancelAdd = this.cancelAdd.bind(this);
    this.saveContact = this.saveContact.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handlePhonenumber = this.handlePhonenumber.bind(this);
  }

  handleNameInput(event){
    this.setState({name : event.target.value})
  }

  handlePhonenumber(event){
    this.setState({phonenumber : event.target.value})
  }

  changeAdd(event){
    event.preventDefault();
    this.setState({ isChanged: true });
  }

  saveContact(event){
    event.preventDefault();
    this.props.saveContact(this.state.contact)
    this.setState({name : '', phonenumber:'', isEdit: false})
  }

  cancelAdd(event){
    event.preventDefault();
    this.setState({isChanged : false});
  }

  render() {
    if (this.state.isChanged === true) {
      return (
        <div className="card shadow-sm mt-5 mb-5">
          <div className="card-header font-weight-bold">Add Contact</div>
          <div className="card-body">
            <form onSubmit={this.saveContact}>
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Name" value={this.state.contact.name} onChange={this.handleNameInput} />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    value = {this.state.contact.phonenumber}
                    onChange = {this.handlePhonenumber}
                  />
                </div>
                <div className="col">
                  <button className="btn btn-outline-success"> Save </button>&nbsp;
                  <button className="btn btn-warning" onClick={this.cancelAdd}> Cancel </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return <button className="btn btn-outline-primary mt-5" onClick={this.changeAdd}>Add Contact</button>;
    }
  }
}

export default AddContact;
