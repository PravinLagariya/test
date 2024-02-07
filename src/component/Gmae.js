import React, { useState } from 'react'

function Gmae() {
    const [ans, setAns] = useState()
    const [selected, setSelected] = useState(false);
    const [error, setError] = useState(false);

    const [quizEnd, setQuizEnd] = useState(false);
    const [score, setScore] = useState();

    const quasList = [
        {
            id: 1,
            question: "What is the capital of Haryana?",
            options: ["Yamunanagar", "Panipat", "Gurgaon", "Chandigarh"],
            answer: "Chandigarh",
        },
        // {
        //     id: 2,
        //     question: "What is the capital of Punjab?",
        //     options: ["Patiala", "Ludhiana", "Amritsar", "Chandigarh"],
        //     answer: "Chandigarh",
        // },
        // {
        //     id: 3,
        //     question: "What is the capital of India?",
        //     options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        //     answer: "Delhi"
        // },
        // {
        //     id: 4,
        //     question: "What is the capital of Uttarakhad?",
        //     options: ["Roorkee", "Haridwar", "Dehradun", "Nanital"],
        //     answer: "Dehradun"
        // }
    ]
    // console.log(quasList[0].id);
    const rightAns = quasList[0].answer;

    const hendleAns = (e) => {
        if (e.target.value === rightAns) {
            console.log("right");

            const scorevalue = 1;
            setScore(scorevalue);
            // setScore(1);
            console.log("velue", e.target.value);
        } else {
            console.log("wrong");
        }
        setAns(e.target.value);
        setSelected(e.target.value);
    }
    // console.log("ad", rightAns);

    const hendleSubmit = (e) => {
        if (selected === false) {
            console.log("plase select ans");
            setError(true)
        } else {
            console.log("ans value", ans);
            setSelected(false);
            setError(false);
            setQuizEnd(true);
        }
    }
    return (
        <div className='container'>
            <p>Game</p>
            {quizEnd === false ? (
                <form>
                    {quasList && quasList.map((res, index) => {
                        return (
                            <div key={index}>
                                <p>{res.question}</p>
                                {res.options && res.options.map((get, key) => {
                                    // console.log("map 3", get);
                                    return (
                                        <div role="group">
                                            <div key={key} >
                                                <input id={get} value={get} checked={selected === get} onChange={hendleAns} name={get} type='radio' />
                                                <label htmlFor={get} >{get}</label>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                    {error === true ? <p>plase select ans</p> : ''}
                    <button type='button' onClick={hendleSubmit}>Submit</button>
                </form>
            ) : (
                <>
                    <p>Your Score: {score}</p>
                </>
            )}
        </div>
    )
}

export default Gmae;