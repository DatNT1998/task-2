import React, { useEffect, useState } from 'react';
import Goal from '../src/components/Goal.component';

// import Airtable from 'airtable';


import './App.css';

function App() {

    // const base = new Airtable({ apiKey: "keyF3WkWva6D8mdhC" }).base("appk1k59lSJbYpMfh");

    const [goals, setGoals] = useState([]);
    const [updates, setUpdates] = useState([]);

    useEffect(() => {
        fetch('https://api.airtable.com/v0/appk1k59lSJbYpMfh/goals?api_key=keyF3WkWva6D8mdhC')
            .then((resp) => resp.json())
            .then(data => {
                setGoals(data.records);
            }).catch(err => {
                // Error :(
            });

        fetch('https://api.airtable.com/v0/appk1k59lSJbYpMfh/updates?api_key=keyF3WkWva6D8mdhC')
            .then((resp) => resp.json())
            .then(data => {
                setUpdates(data.records)
            }).catch(err => {
                // Error :(
            });
    }, []);
    // console.log(goals, 'goal');
    // console.log(goals.field.updates);

    return (
        <div className="App">
            <h1 className="main-title"> My Goal</h1>
            {
                goals.map(goal => (
                    <Goal
                        key={goal.id}
                        goal={goal}
                        updates={updates.filter(
                            (update) => update.fields.goalID[0] === goal.id)}
                    />
                ))
            }
        </div>
    );
}

export default App;


