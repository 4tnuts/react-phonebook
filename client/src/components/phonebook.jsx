import React, { Component } from "react";
import AddContact from "./addContact";
import SearchContact from "./searchContact";
import ContactList from "./contactList";
class Phonebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: "123", name: "Akusuka", phonenumber: "203399" },
        { id: "232", name: "buumbumb", phonenumber: "82723" },
        { id: "4433", name: "lololol", phonenumber: "09876663" }
      ]
    };
  }

  render() {
    return (
      <body>
        <div className="container-fluid">
          <div className="container mt-5">
            <h1 className="display-4 text-center">React Phonebook</h1>
          </div>
        </div>
        <div className="container">
          <AddContact />
          <SearchContact />
          <ContactList contactList={this.state.contacts} />
        </div>
        <div class="container mt-5">
          <h5 class="text-center text-muted">
            Created by https://github.com/4tnuts
          </h5>
        </div>
      </body>
    );
  }
}

export default Phonebook;
