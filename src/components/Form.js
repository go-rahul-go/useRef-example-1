import {useState,useRef} from "react";
import "../style.css"

const Form = ()=>{
    const inputRef = useRef(null);
    const [name,setName]=useState("")
    const handleSubmit = (e)=>{
        e.preventDefault();
        const name=inputRef.current.value;
        
        (name)?setName(inputRef.current.value):alert("enter some name");
    }
    return(
        <div id="form-box">
        <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="username"></label>
            <input type="text" id="username" ref={inputRef}/>
            <button type="submit" id="btn">Submit</button>
        </form>
        <p className="name-box">{name}</p>
        </div>
    )
}

export default Form;