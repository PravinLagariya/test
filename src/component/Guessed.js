import React, { useState } from 'react'

function Guessed() {
    const [scheat, setScheat] = useState();

    const secretNum = {
        secret: Math.floor(Math.random() * 20) + 1
    };

    const Rendam = secretNum.secret;
    console.log("Number =>", Rendam);
    const [names, setNames] = useState(Rendam);
    const [number, setNumber] = useState();

    const findNumber = (e) => {
        // setNames('6');
        setScheat(e.target.value)
        setNumber(e.target.value)
        if (names > number) {
            setScheat('Lower');
        } else if (names < number) {
            setScheat('Higher');
        } else if (names === number) {
            setScheat('Yippee, correct!');
        } else {
            setScheat('Enter Valid Input');
        }
    }

    return (
        <div className='container'>
            <>
                <div className='head'>
                    <label htmlFor='term'>
                        Guess Number between 1 to 20
                    </label>
                </div>
                <input id='term' type='text' name={names} value={number} onChange={findNumber} />
                {/* <button onClick={numberSet}>Restart</button> */}
                <h3>You Guessed: {scheat}</h3>
            </>
        </div>
    )
}

export default Guessed