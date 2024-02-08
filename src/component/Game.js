import React, { useState } from 'react'

function Game() {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selected, setSelected] = useState('');
    const [ans, setAns] = useState('');
    const [error, setError] = useState(false);
    const [quizEnd, setQuizEnd] = useState(false);
    const [score, setScore] = useState(0);

    const quasList = [
        {
            id: 1,
            question: "What is the capital of Haryana?",
            options: ["Yamunanagar", "Panipat", "Gurgaon", "Chandigarh"],
            answer: "Chandigarh",
        },
        {
            id: 2,
            question: "What is the capital of Punjab?",
            options: ["Patiala", "Ludhiana", "Amritsar", "Chandigarh"],
            answer: "Chandigarh",
        },
        {
            id: 3,
            question: "What is the capital of India?",
            options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
            answer: "Delhi"
        },
        {
            id: 4,
            question: "What is the capital of Uttarakhad?",
            options: ["Roorkee", "Haridwar", "Dehradun", "Nanital"],
            answer: "Dehradun"
        }
    ]
    const hendleAns = (e) => {
        setAns(e.target.value);
        setSelected(e.target.value);
        console.log("ans", ans, selected);
    }

    const hendleSubmit = (e) => {
        setAns(e.target.value)
        if (selected === "") {
            setError(true);
            console.log("error");
        } else {
            console.log("submit", ans);
            setError(false);
            if (selected === quasList[currentQuestionIndex].answer) {
                setScore(score + 1);
                console.log("scroe", score + 1);
            }
            setAns('');
            setSelected('');
            setError(false);
            if (currentQuestionIndex === quasList.length - 1) {
                setQuizEnd(true);
            } else {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            }
        }
    }
    return (
        <div className='container'>
            {quizEnd === false ? (
                <form>
                    <div key={quasList[currentQuestionIndex].id}>
                        <p>{quasList[currentQuestionIndex].question}</p>
                        {quasList[currentQuestionIndex].options.map((option, key) => {
                            return (
                                <div key={key} role="group">
                                    <div>
                                        <input id={option} value={option} checked={selected === option} onChange={hendleAns} name={option} type='radio' />
                                        <label htmlFor={option} >{option}</label>
                                    </div>
                                </div>
                            )
                        })}
                        {error && <p>plase select ans</p>}
                        <button type='button' onClick={hendleSubmit}>Submit</button>
                    </div>
                </form>
            ) : (
                <p>Your Scor : {score}</p>
            )}
        </div>
    )
}

export default Game;