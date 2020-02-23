import React, { Component } from "react";

class SearchContact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', phonenumber: '' };
  }

  render(){
    return (
        <div className="card shadow-sm mt-3">
            <div className="card-header font-weight-bold">
                Search Contact
            </div>
            <div className="card-body">
                <form>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Phone Number" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )   
  }
}

export default SearchContact;
