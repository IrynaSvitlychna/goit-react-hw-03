import Contact from "../Contact/Contact"



function ContactList({ contacts }) {

    return (
        <ul className="">
            {contacts.map((contact) => (
                <li className="" key="id">
                   <Contact data={contact} /> 
              </li>
          ) ) }
</ul>
    )
} 

 export default ContactList