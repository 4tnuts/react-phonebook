import React from "react";

function ContactRow(props) {
    const { id, name, phonenumber } = props.contact
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{phonenumber}</td>
      <td>
        <button className="btn btn-outline-primary"> Edit </button>&nbsp;
        <button className="btn btn-outline-danger"> Delete </button>
      </td>
    </tr>
  );
}

export default ContactRow;
