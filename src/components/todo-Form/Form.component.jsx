import Reac from "react";
 import "./form.style.css";

export const Form = ({placeholder ,handleChange ,submitHandler ,inputText}) =>(
    <form>
        <input className="search" value={inputText} className="search" type="text" placeholder={placeholder} onChange ={handleChange}  />
        <button className="button   " onClick={submitHandler}>submit</button>
    </form>
)