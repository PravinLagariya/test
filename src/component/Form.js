import React, { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    })
    const handler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        console.log("evrnt", name, value);

        setFormData((next) => {
            return{
                ...next, [name] : value
            }
        })
    };
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input value={formData.email} onChange={handler} type="email" name='email' className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" value={formData.password} onChange={handler} name='password' className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label" >Check me out</label>
                    <input value={formData.name} onChange={handler} type="text" name='name' className="form-control" />
                </div>
                <p>{`My Name ${formData.name} && My Email ${formData.email} && My Password ${formData.password}`}</p>
                <button type="button" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form
