import { useId } from "react"


function SearchBox({ value, onChange }) {
    const id = useId();

    return (
        <div>
          
            <label htmlFor={id}>Name</label>
            <input type="text" value={value} onChange={(e) => onChange(e.target.value)} id={id} />
               
</div>
    )
} 

 export default SearchBox