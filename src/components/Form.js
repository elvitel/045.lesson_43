import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddContact = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');

    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();        
        if (!name || !username || !phone) {
            alert('Fields are not completed');
        } else {
            const data = {
                id: contacts[contacts.length - 1].id + 1,
                name,
                username,
                phone,
            };   
            dispatch({type: 'ADD_CONTACT', payload: data});
            navigate('/');
        }
    };    

    return (
        <div>            
            <h1>Add a new contact</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div>
                    <input type="tel" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <button>Save</button>
                    <Link to='/'><button>Cancel</button></Link>
                </div>                 
            </form>                       
        </div>
    );
}

export default AddContact;