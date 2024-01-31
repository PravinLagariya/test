import React, { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    })
    const [errors, setErrors] = useState({});
    const [merrors, setMerrors] = useState({});

    const handler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log("evrnt", name, value);

        setFormData((next) => {
            return {
                ...next, [name]: value
            }
        }, [formData])

        if (formData.name.length === 0) {
            setErrors((back) => ({ ...back, name: 'set error' }))
        }
        else (
            setErrors((back) => ({ ...back, name: '' }))
        )

        if (formData.password.length === 0) {
            setErrors((back) => ({ ...back, password: 'set error' }))
        }
        else (
            setErrors((back) => ({ ...back, password: '' }))
        )

        if (formData.email.length === 0) {
            setErrors((back) => ({ ...back, email: 'set error' }))
        }
        else (
            setErrors((back) => ({ ...back, email: '' }))
        )
    };
    const handlerSubmit = (event) => {
        // setFormData
        if (formData.name.length === 0 && formData.email.length === 0 && formData.password.length === 0) {
            setMerrors((backs) => ({ ...backs, name: 'set name', password: 'set password', email: 'set email' }))
            setErrors((backs) => ({ ...backs, name: 'set name', password: 'set password', email: 'set email' }))
            console.log("Error data not here");
        } else if (formData.name.length <= 0 && formData.email.length <= 0 && formData.password.length <= 0) {
            setErrors((backs) => ({ ...backs, name: '', password: '', email: '' }))
            console.log("Error data not here");
        } else {
            setErrors((backs) => ({ ...backs, name: '', password: '', email: '' }))
            setMerrors((backs) => ({ ...backs, name: '', password: '', email: '' }))
            console.log("valid data", formData);
        }

        console.log("data Submit", errors);
    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input value={formData.name} onChange={handler} type="text" name='name' className="form-control" />
                    <p className='text-danger'>{errors.name}</p>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input value={formData.email} onChange={handler} type="email" name='email' className="form-control" />
                    <p className='text-danger'>{errors.email}</p>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" value={formData.password} onChange={handler} name='password' className="form-control" />
                    <p className='text-danger'>{errors.password}</p>
                </div>
                {/* <p>{`My Name ${formData.name} `}<br />{` My Email ${formData.email} `}<br />{` My Password ${formData.password}`}</p> */}
                <p className='text-danger'>{merrors.name || merrors.email || merrors.password}</p>
                <button onClick={handlerSubmit} type="button" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form
