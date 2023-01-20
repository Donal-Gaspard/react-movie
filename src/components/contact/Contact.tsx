import React, {useState} from 'react';

interface Person {
 id:number;
  name: string;
}
const Contact = () => {
 const [contacts, setContacts] = useState<Person[]>([]);
  const [contact, setContact] = useState<Person |null >(null);
  const [counter, setCounter] = useState(1);

 const addContact = () => {
   if (contact) {
     setContacts([...contacts, contact]);
     setContact(null);
     setCounter(counter + 1);
   }
  }

  const removeContact = (id: number) => setContacts(contacts.filter((contact) => contact.id !== id));

 const contactsRender = contacts.map((contact) => (
    <li key={contact.id}>
      <>
        {contact.name}
        <span onClick={()=> removeContact(contact.id)} style={{color: 'red', cursor:'pointer', padding: '10px'}}>X</span>
      </>
    </li>
  ));

  return (
    <div>
      <h2>Contact</h2>
      <input type="text" onChange={(e)=>  setContact( { id: counter, name: e.target.value  })} value={contact?.name} />
      <button onClick={addContact}>Add</button>
      <br/>
      contact number {' '}
      {contacts.length}
      <ul style={{listStyle:'none'}}>
      {contactsRender}
      </ul>
    </div>
  );
};

export default Contact;
