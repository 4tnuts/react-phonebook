import React from "react";
import ContactRow from "./contactRow";

function ContactList(props) {
  const contacts = props.contactList.map(contact => {
    return (
      <ContactRow
        contact={{
          id: contact._id,
          name: contact.name,
          phonenumber: contact.phonenumber
        }}
      />
    );
  });

  return (
    <div className="card shadow-sm mt-5">
      <div className="card-header font-weight-bold">Contact List</div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>{contacts}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ContactList;
