import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Contacts = () => {

    const contacts = useSelector(state => state);

    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id});
    };

    return (
        <div>
            <div>
                <h1>Contacts</h1>
            </div>            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact.id}>                        
                                <td>{contact.name}</td>
                                <td>{contact.username}</td>
                                <td>{contact.phone}</td>
                                <td><button type='button' onClick={() => deleteContact(contact.id)} style={{ marginLeft: '20px' }}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ marginTop: '20px' }}>
                <Link to='/add'><button>Add a contact</button></Link>
            </div>
        </div>
    );
}

export default Contacts;