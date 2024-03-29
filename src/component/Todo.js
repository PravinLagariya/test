import React, { useState } from 'react'

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(false);
    const [text, setText] = useState('');
    const [visible, setVisible] = useState([]);
    const [edit, setEdit] = useState([]);
    const [history, setHistory] = useState([]);

    const handleChange = (event) => {
        setText(event.target.value)
    };

    const addTask = (index) => {
        console.log("New Task", tasks);
        if (text === '') {
            setError(true);
        } else {
            setTasks([...tasks, text]);
            setVisible([...visible, true]);
            setEdit([...edit, false]);
            setError(false);
            setHistory([...history, `Added ${text}`]);
            setText('');
        }
        console.log('row new', visible);
    }

    const removeRow = (index) => {
        const moveRow = [...visible];
        moveRow[index] = false;
        setVisible(moveRow);

        const removeHistory = tasks[index];
        setHistory([...history, `Removed task: "${removeHistory}"`]);

        console.log('remove row');
        console.log('row', visible);
    }

    const editRow = (index) => {
        const editsRow = Array(tasks.length).fill(false);
        editsRow[index] = tasks[index];
        setEdit(editsRow);
        console.log('edit row');
    }

    const saveRow = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = edit[index];
        setTasks(updatedTasks);

        const updatedEdit = [...edit];
        updatedEdit[index] = false;
        setEdit(updatedEdit);

        const updateedHistory = [...history];
        updateedHistory.push(`Edited ${tasks[index]} to ${edit[index]}`);
        setHistory(updateedHistory);
        console.log('save row');
    }

    const cancelRow = () => {
        setEdit(false);
    }


    return (
        <div className='container'>
            <div className="mb-3">
                <label className="form-label"><h2>ToDo List</h2></label>
                <input value={text} onChange={handleChange} type="text" name='task' className="form-control" />
                <p className='text-danger'>{text}</p>
                {error === true ? <p className='text-danger'>Task cannot be empty</p> : ''}
                <button type="button" onClick={addTask} className="btn btn-primary">Add Task list</button>
            </div>
            <div className='row'>
                <ul className='col-7'>
                    {tasks.length > 0 ? (
                        tasks.slice().reverse().map((task, index) => {
                            const reversedIndex = tasks.length - 1 - index;
                            return (
                                <div key={reversedIndex}>
                                    {visible[reversedIndex] && (
                                        <li key={reversedIndex} id={`rowName${reversedIndex}`}>
                                            {edit[reversedIndex] ? (
                                                <>
                                                    <input
                                                        value={edit[reversedIndex]}
                                                        onChange={(e) => {
                                                            const editedValue = e.target.value;
                                                            const updatedEdit = [...edit];
                                                            updatedEdit[reversedIndex] = editedValue;
                                                            setEdit(updatedEdit);
                                                        }} className="form-control mb-2" />
                                                    <button onClick={() => saveRow(reversedIndex)} className='btn btn-success me-2'>save</button>
                                                    <button onClick={() => cancelRow(reversedIndex)} className='btn btn-danger'>Cancel</button>
                                                </>
                                            ) : (
                                                <>
                                                    <p>{task}</p>
                                                    <button onClick={() => editRow(reversedIndex)} className='btn btn-primary me-2'>edit</button>
                                                    <button onClick={() => removeRow(reversedIndex)} className='btn btn-danger'>-</button>
                                                </>
                                            )}
                                        </li>
                                    )}
                                </div>
                            );
                        })
                    ) : (
                        <p>No tasks added yet.</p>
                    )}
                </ul>
                <div className='col-5'>
                    <h3>History</h3>
                    <ul className='p-0'>
                        {history.length > 0 ? (
                            history.slice().reverse().map((entry, index) => (
                                <li key={index}>{entry}</li>
                            ))
                        ) : (
                            <p>No tasks history yet.</p>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Todo;