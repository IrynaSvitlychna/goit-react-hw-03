import { BiSolidUser, BiSolidPhone } from "react-icons/bi";

function Contact({ data: {name, number, id}, onDelete }) {
    console.log({name, number, id});
    return (
        <>
            <BiSolidUser />
            <p>{name}</p>
            <BiSolidPhone />
            <p>{number}</p>
            <button onClick={() => onDelete(id)}>Delete</button>
        </>
       
    )
} 

 export default Contact
