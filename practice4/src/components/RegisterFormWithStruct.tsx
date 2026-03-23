import {useState} from "react";


function RegisterFormWithStruct() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        subscribe: false
    })

    function handleForm(event) {
        const {name, value, type, checked} = event.target
        setFormData({
            ...formData,
            [name]: type == "checkbox" ? checked : value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <>
            <form action = "" onSubmit={handleForm}>
                <input type={"text"} name="name" onChange={handleForm}/>
                <input type={"email"} name="email" onChange={handleForm}/>
                <input type={"number"} name="age" onChange={handleForm}/>

                <label htmlFor={""}>
                    <input type={"checkbox"} name={"subscribe"} onChange={handleForm}/>
                    Subscribe for more
                </label>
                <button type={"submit"} onSubmit={handleSubmit}>Submit</button>
            </form>

            <h2>Name: {formData.name}</h2>
            <h2>Email: {formData.email}</h2>
            <h2>Age: {formData.age}</h2>
            <h2>Subscribe: {formData.subscribe.toString()}</h2>
        </>
    )
}

export default RegisterFormWithStruct