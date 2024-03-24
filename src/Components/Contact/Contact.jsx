

function Contact({ data: {name, number} }) {

    return (
        <>
         <p>{name}</p>
            <p>{number}</p>
            <button>Delete</button>
        </>
       
    )
} 

 export default Contact
