import React, { useState } from 'react';

const WorkoutRoutine = () => {
    const [exercises, setExercises] = useState([]);
    const [exerciseInput, setExerciseInput] = useState('');

    const addExercise = () => {
        if (exerciseInput) {
            setExercises([...exercises, exerciseInput]);
            setExerciseInput('');
        }
    };

    const removeExercise = (index) => {
        const newExercises = exercises.filter((_, i) => i !== index);
        setExercises(newExercises);
    };

    return (
        <div>
            <h1>Workout Routine</h1>
            <input
                type="text"
                value={exerciseInput}
                onChange={(e) => setExerciseInput(e.target.value)}
                placeholder="Add an exercise"
            />
            <button onClick={addExercise}>Add Exercise</button>
            <ul>
                {exercises.map((exercise, index) => (
                    <li key={index}>
                        {exercise}
                        <button onClick={() => removeExercise(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkoutRoutine;