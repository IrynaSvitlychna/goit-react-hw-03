import { BiSolidUser, BiSolidPhone } from "react-icons/bi";

function Contact({ data: {name, number} }) {
 
    return (
        <>
            <BiSolidUser />
            <p>{name}</p>
            <BiSolidPhone />
            <p>{number}</p>
            <button>Delete</button>
        </>
       
    )
} 

 export default Contact
