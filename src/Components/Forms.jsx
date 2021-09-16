import { useState } from "react"


 
const initValue = {
    username: "",
    age: "",
}
export const Forms = () => {
    const [formData, setFormData] = useState(initValue);
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        // console.log(e.target.checked)
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="username" placeholder="Username" />
            <br />
            <input onChange={handleChange} type="number" name="age" placeholder="Age" />
            <br />
            Are you Married?{" "}
            <input onChange={handleChange} type="checkbox" name="isMarried" />
            <input onChange={handleChange} type="submit" value="Submit" placeholder="Username" />
            <br/>
        </form>
    )
}