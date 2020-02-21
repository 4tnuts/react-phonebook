import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', phonenumber: '' };
  }

  render(){
    return (
        <div class="card shadow-sm mt-5">
            <div class="card-header font-weight-bold">
                Add Contact
            </div>
            <div class="card-body">
                <form>
                    <div class="form-row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Name" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Phone Number" />
                        </div>
                        <div class="col">
                            <button class="btn btn-outline-success"> Save </button>&nbsp;<button
                                class="btn btn-warning"> Cancel </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )   
  }
}

export default AddContact;
