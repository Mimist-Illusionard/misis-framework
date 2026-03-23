import {useState} from "react";


function RegisterForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")

    return (
        <>
            <input type={"text"} onChange={(e) => setName(e.target.value)}/>
            <input type={"email"} onChange={(e) => setEmail(e.target.value)}/>
            <input type={"number"} onChange={(e) => setAge(e.target.value)}/>

            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            <h2>Age: {age}</h2>
        </>
    )
}

export default RegisterForm