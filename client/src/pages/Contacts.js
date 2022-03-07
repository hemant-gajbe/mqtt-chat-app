import React from 'react'
import { useEffect, useState } from 'react';
import api from '../api/contacts'
import { v4 as uuidv4 } from 'uuid';

const Contacts = (props) => {

    const [contacts, setContacts] = useState([]);

    // RetrieveContacts
    const retrieveContacts = async() => {
        const response = await api.get("/contacts")
        return response.data;
    }

    const addContactHandler = async(contact) => {
        console.log(contact);
        const request = {
            id: uuidv4(),
            ...contact,
        }

        const response = await api.post("/contacts", request);
        setContacts([...contacts, response.data]);
    }

    const removeContactHandler = async (id) => {
        await api.delete(`/contacts/${id}`);
        const newContactList = contacts.filter((contact) => {
            return contact.id != id;
        })

        setContacts(newContactList);
    }

    useEffect(() => {
        const getAllContacts = async() => {
            const allContacts = await retrieveContacts();
            if(allContacts) setContacts(allContacts);
        };

        getAllContacts();
    }, [])
    
    return (
        <div>
            Contacts
        </div>
    )
}

export default Contacts
