const fetchAllContacts = () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
        return response.json();
    });
};

let initialState = await fetchAllContacts();

const contactReducer = (state = initialState, action) => {     
    switch(action.type) {
        case 'ADD_CONTACT':
            state = [...state, action.payload];
            return state;
        case 'DELETE_CONTACT':
            const filterContacts = state.filter((contact) => contact.id !== action.payload && contact);
            state = filterContacts;
            return state;
        default: return state;
    }
};

export default contactReducer;