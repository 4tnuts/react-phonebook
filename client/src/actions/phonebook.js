import axios from 'axios';

const request = axios.create({
    baseURL: "http://localhost:4000/api/",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" }
  });

  // Fungsi - fungsi yang akan digunakan untuk action load contact
  const loadContactsSuccess = ( contacts ) => ({
    type : 'LOAD_CONTACTS_SUCCESS',
    contacts
  })

  const loadContactsFail = () => ({
      type : 'LOAD_CONTACTS_FAIL'
  })

  export const loadContacts = () => {
      return dispatch => {
        return request.get('phonebook')
        .then( response => {
            dispatch(loadContactsSuccess(response.data));
        })
        .catch( error => {
            dispatch(loadContactsFail());
        })
      }
  }

  const addContactSuccess = ( contactData ) => ({  
    type : 'ADD_CONTACT_SUCCESS',
    contactData
  })

  const addContactFail = () => ({
    type : 'ADD_CONTACT_FAIL'
  })

  const addContactToStore = () => ({
    type : 'ADD_CONTACTS_TO_STORE', name, phonenumber
  })

  export const addContact = (name, phonenumber) => {
    return dispatch => {
        dispatch(addContactToStore(name, phonenumber))
        return request.post('phonebook', {name, phonenumber})
        .then( response => {
            dispatch(addContactSuccess(response.data));
        })
        .catch( error => {
            dispatch(addContactFail());
        })
    }
  }
