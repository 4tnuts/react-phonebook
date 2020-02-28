const phonebook = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_CONTACTS_SUCCESS':
            return state

        case 'ADD_CONTACT_TO_STORE':
            return [
                ...state,
                {
                    name : action.name,
                    phonenumber : action.phonenumber
                }
            ]
        
        case 'ADD_CONTACT_SUCCESS':
            return state.map(contact => {
                return contact;
            })
        
        case 'ADD_CONTACT_FAIL':
        case 'LOAD_CHAT_FAIL':
        default:
            return state
    }
}

export default phonebook;