import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = { isChanged: false, contact: { name: "", phonenumber: "" } };
    this.changeAdd = this.changeAdd.bind(this);
    this.saveContact = this.saveContact.bind(this);
    this.cancelAdd = this.cancelAdd.bind(this);
  }

  changeAdd(event){
    event.preventDefault();
    this.setState({ isChanged: true });
  }

  saveContact(event){
    event.preventDefault();
    this.setState({ isChanged: false });
  }

  cancelAdd(event){
    event.preventDefault();
    this.setState({isChanged : false});
  }

  render() {
    if (this.state.isChanged === true) {
      return (
        <div class="card shadow-sm mt-5">
          <div class="card-header font-weight-bold">Add Contact</div>
          <div class="card-body">
            <form>
              <div class="form-row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <div class="col">
                  <button class="btn btn-outline-success" onClick={this.saveContact}> Save </button>&nbsp;
                  <button class="btn btn-warning" onClick={this.cancelAdd}> Cancel </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return <button onClick={this.changeAdd}>tambah data</button>;
    }
  }
}

export default AddContact;
