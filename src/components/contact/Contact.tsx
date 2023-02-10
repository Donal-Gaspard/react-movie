import React, { useState } from "react";

interface Person {
	id: number;
	name: string;
}
const Contact = () => {
	const [contacts, setContacts] = useState<Person[]>([]); // c'est un objet personne par un tableau vide car on évite d'avoir une variable undefined / Entre les chevrons j'initialise
	const [contact, setContact] = useState<Person | null>(null); // je connais le type personne mais là on a pas de personne // toujours penser usestate et valeur par défaut // set contact sert à le mettre dans la mémoire
	const [counter, setCounter] = useState(1); // la valeur par défaut est à 1

	const addContact = () => {
		if (contact) {
			setContacts([...contacts, contact]); // C'est un spread operator pour les tableau et les objets //prends les personnes qui sont déjà dans le tableau et ajoute moi contact similaire à push
			setContact(null); // il sert de mémoire tampon
			setCounter(counter + 1); // ajout d'un identifant
		}
	};

	const removeContact = (id: number) =>
		setContacts(contacts.filter((contact) => contact.id !== id)); // renvoie moi tout à part cet id

	const contactsRender = contacts.map(
		(
			contact // boucle sur chaque personne, je peux définir un rendu pour chaque personne // key => un identifiant unique pour chaque élément
		) => (
			<li key={contact.id}>
				<>
					{contact.name}
					<span
						onClick={() => removeContact(contact.id)}
						style={{
							color: "red",
							cursor: "pointer",
							padding: "10px",
						}}
					>
						X
					</span>
				</>
			</li>
		)
	);

	console.log("Contact");

  // si le nombre de contact est = 0 ne rien afficher
  // si le nombre de contact est = 1 afficher contact
  // si le nombre de contact est > 1 afficher contacts
  const contactText =() => {
    switch (contacts.length) {
      case 0:
        return '';
      case 1:
        return `Nombre de contact: ${contacts.length}`
      default:
        return `Nombre de contacts: ${contacts.length}`;
    }
  }

	return (
		<div>
			<h2>Contact</h2>
      {contactText()}
      <br/>
			<input
				type="text"
				onChange={(e) =>
					setContact({ id: counter, name: e.target.value })
				}
				value={contact?.name}
			/>
			<button onClick={addContact}>Add</button>
			<br />
			contact number {contacts.length}
			<ul style={{ listStyle: "none" }}>{contactsRender}</ul>
		</div>
	);
};

export default Contact;
