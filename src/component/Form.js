import React, { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    })
    const [errors, setErrors] = useState({});

    const handler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log("evrnt", name, value);

        setFormData((next) => {
            return {
                ...next, [name]: value
            }
        }, [formData])
        if (formData.name === '') {
            errors.name = "Minimum age is 18";
        } else if (formData.email === '') {
            errors.email = "Email is too short";
        } else if (formData.password === '') {
            errors.password = "Password is too short";
        } else {
            errors.name = '';
            errors.email = '';
            errors.password = '';
        }
        console.log("data Submit", errors);
    };
    const handlerSubmit = (event) => {
        if (formData.name === '') {
            errors.name = "Minimum age is 18";
        } else if (formData.email === '') {
            errors.email = "Email is too short";
        } else if (formData.password === '') {
            errors.password = "Password is too short";
        } else {
            errors.name = '';
            errors.email = '';
            errors.password = '';
        }
        console.log("data Submit", errors);
    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input value={formData.name} onChange={handler} type="text" name='name' className="form-control" />
                    <p>{errors.name}</p>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input value={formData.email} onChange={handler} type="email" name='email' className="form-control" />
                    <p>{errors.email}</p>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" value={formData.password} onChange={handler} name='password' className="form-control" />
                    <p>{errors.password}</p>
                </div>
                <p>{`My Name ${formData.name} `}<br />{` My Email ${formData.email} `}<br />{` My Password ${formData.password}`}</p>
                <button onClick={handlerSubmit} type="button" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form
