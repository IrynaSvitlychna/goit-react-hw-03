import { BiSolidUser, BiSolidPhone } from "react-icons/bi";
import './Contact.module.css';

function Contact({ data: {name, number, id}, onDelete }) {
    console.log({name, number, id});
    return (
        <div className="container-contact">
            <BiSolidUser />
            <p>{name}</p>
            <BiSolidPhone />
            <p>{number}</p>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
       
    )
} 

 export default Contact
