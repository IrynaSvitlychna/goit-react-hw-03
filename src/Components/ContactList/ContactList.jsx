import Contact from "../Contact/Contact"



function ContactList({ contacts, onDelete }) {

    return (
        <ul className="">
            {contacts.map((contact) => (
                <li className="" key="id">
                   <Contact data={contact} onDelete={onDelete} /> 
              </li>
          ) ) }
</ul>
    )
} 

 export default ContactList