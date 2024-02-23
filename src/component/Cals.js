import React, { useState } from 'react'

function Cals() {
    const [display, setDisplay] = useState('');
    const [total, setTotal] = useState('');

    const handleChange = (e) => {
        setDisplay(e.target.value);
    }

    const heandaleNumber = (e) => {
        console.log("cal num", e.target.value);
        setDisplay(display + e.target.value);
    }

    const heandleTotal = () => {
        try {
            const result = eval(display);
            console.log("eval", result.toString());
            setTotal(result.toString());
        } catch (error) {
            setTotal('Error');
        }
    }

    const heandleClear = () => {
        setDisplay('');
        setTotal('');
        console.log("Clear data");
    }

    return (
        <div className='container '>
            <input value={display} onChange={handleChange} type="text" name='count' className="form-control" />
            <input value={total} type="text" name='total' className="form-control" />
            <br />
            <br />
            <button onClick={heandleClear} value='='>Reset</button>
            <button onClick={heandaleNumber} value='1'>1</button>
            <button onClick={heandaleNumber} value='2'>2</button>
            <button onClick={heandaleNumber} value='3'>3</button>
            <button onClick={heandaleNumber} value='4'>4</button>
            <button onClick={heandaleNumber} value='5'>5</button>
            <button onClick={heandaleNumber} value='6'>6</button>
            <button onClick={heandaleNumber} value='7'>7</button>
            <button onClick={heandaleNumber} value='9'>9</button>
            <button onClick={heandaleNumber} value='0'>0</button>
            <br />
            <button onClick={heandaleNumber} value='%'>%</button>
            <button onClick={heandaleNumber} value='+'>+</button>
            <button onClick={heandaleNumber} value='-'>-</button>
            <button onClick={heandaleNumber} value='*'>*</button>
            <button onClick={heandaleNumber} value='/'>/</button>
            <button onClick={heandleTotal} value='='>=</button>
        </div>
    )

}

export default Cals