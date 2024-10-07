import React, { useState } from 'react';

const AddDocument = () => {

    const [name, setName] = useState('');
    const [squadSize, setSquadSize] = useState('');
    const [averageAge, setAverageAge] = useState('');
    const [stadiumName, setStadiumName] = useState('');
    const [stadiumSeats, setStadiumSeats] = useState('');
    const [coachName, setCoachName] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${name}`);
      };
return(
    <div>
        <h3>Please enter the details of a team below!</h3>
        <form onSubmit={handleSubmit}>
        <div id="addDocumentForm">
            <label htmlFor="name">Club Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required />
        </div>
        <div>
            <label htmlFor="squad_size">Squad Size:</label>
            <input
                type="text"
                id="squad_size"
                value={squadSize}
                onChange={(e) => setSquadSize(e.target.value)}
                required />
        </div>
        <div>
            <label htmlFor="average_age">Average Age:</label>
            <input
                type="text"
                id="average_age"
                value={averageAge}
                onChange={(e) => setAverageAge(e.target.value)}
                required />
        </div>
        <div>
            <label htmlFor="stadium_name">Stadium Name:</label>
            <input
                type="text"
                id="stadium_name"
                value={stadiumName}
                onChange={(e) => setStadiumName(e.target.value)}
                required />
        </div>
        <div>
            <label htmlFor="stadium_seats">Stadium Capacity:</label>
            <input
                type="text"
                id="stadium_seats"
                value={stadiumSeats}
                onChange={(e) => setStadiumSeats(e.target.value)}
                required />
        </div>
        <div>
            <label htmlFor="coach_name">Coach Name:</label>
            <input
                type="text"
                id="coach_name"
                value={coachName}
                onChange={(e) => setCoachName(e.target.value)}
                required />
        </div>
        <button type="submit">Submit</button>
    </form>
    </div>
);
};
export default AddDocument;
