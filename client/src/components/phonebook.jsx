import React, { Component } from "react";
import AddContact from "./addContact";
import SearchContact from "./searchContact";
import ContactList from "./contactList";
import axios from "axios";
const request = axios.create({
  baseURL: "http://localhost:4000/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" }
});

class Phonebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
    this.saveContact = this.saveContact.bind(this);
    this.loadContact = this.loadContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.editContact = this.editContact.bind(this);
  }

  componentDidMount(){
    this.loadContact();
  }

  loadContact(){
    request.get('phonebook')
    .then(contact => {
      this.setState({contacts : contact.data})
      console.log("ketika mount ini data : " , this.state.contacts)
    })
    .catch(err => {
      console.log("Error Load Chat : ", err);
    })
  }

  saveContact(contactData) {
    console.log(this.state.contacts);
    request
    .post('phonebook', {
      name : contactData.name,
      phonenumber : contactData.phonenumber
    })
    .then(contact => {
      this.setState(prevState => ({
        contacts : [...prevState.contacts, contact]
      }))
    })
    .catch(err => {
      console.log("Save Data : ", err)
    })
  }

  editContact(contact){
    const newContact = {
      id : contact.id,
      name : contact.name,
      phonenumber : contact.phonenumber

    } 
      
    this.setState(prevState => ({
      contacts : prevState.contacts.map(oldContact => oldContact.id === newContact.id ? oldContact : newContact)
    }))

    request
    .put(`phonebook/${contact.id}`, contact)
    .then(contact => {
      
    })
    .catch(err => {
      console.log("Edit Data : ", err);
    })
  }

  deleteContact(id){
    this.setState({contacts : this.state.contacts.filter(contact => contact._id !== id)})
    request.delete(`phonebook/${id}`)
    .then(contact => {

    })
    .catch(err => {
      console.log("Delete Data : ", err);
    })
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="container mt-5">
            <h1 className="display-4 text-center">React Phonebook</h1>
          </div>
        </div>
        <div className="container">
          <AddContact saveContact={this.saveContact}/>
          <SearchContact />
          <ContactList contactList={this.state.contacts} editContact={this.editContact} deleteContact={this.deleteContact}/>
        </div>
        <div className="container mt-5">
          <h5 className="text-center text-muted">
            Created by https://github.com/4tnuts
          </h5>
        </div>
      </div>
    );
  }
}

export default Phonebook;
