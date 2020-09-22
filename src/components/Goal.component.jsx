import React from 'react';

function Goal({ goal, updates }) {
    console.log(updates, 'update nay nay')
    return (
        <div>
            <label className="label-title">
                <input type="checkbox" defaultChecked={goal.fields.complete} disabled />
                <h2> {goal.fields.title}</h2>
            </label>


            <div className="details">
                <h3> DETAILS </h3>
                <p> {goal.fields.details}</p>
            </div>

            <div className="updates">
                <h3> UPDATES </h3>
                {
                    updates.map((update, index) => (
                        <p key={index}> {update.fields.update}</p>
                    ))
                }
            </div>
        </div>
    );
}

export default Goal;