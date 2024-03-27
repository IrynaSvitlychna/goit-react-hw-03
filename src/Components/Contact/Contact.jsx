import { BiSolidUser, BiSolidPhone } from "react-icons/bi";
import css from './Contact.module.css';

function Contact({ data: {name, number, id}, onDelete }) {
    console.log({name, number, id});
    return (
        <div className={css.container}>
            <div className={css.element}>
                <div className={css.namecontainer}>
                    <BiSolidUser />
                    <p className={css.item}>{name}</p>
                </div>
                <div className={css.numbercontainer}>
                    <BiSolidPhone />
                    <p className={css.item}>{number}</p>
                </div>
            </div>
            <button onClick={() => onDelete(id)} className="css.btn">Delete</button>
        </div>
       
    )
} 

 export default Contact
