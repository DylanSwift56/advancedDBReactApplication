import React, { useState } from 'react';
import localDB from './db';

const AddDocument = () => {

    const [name, setName] = useState('');
    const [competition, setCompetition] = useState('');
    const [squadSize, setSquadSize] = useState('');
    const [foreignPlayerCount, setForeignPlayerCount] = useState('');
    const [foreignPlayerPercentage, setForeignPlayerPercentage] = useState('');
    const [averageAge, setAverageAge] = useState('');
    const [stadiumName, setStadiumName] = useState('');
    const [stadiumSeats, setStadiumSeats] = useState('');
    const [coachName, setCoachName] = useState('');
    const [netTransferRecord, setNetTransferRecord] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        localDB.post({
            name: `${name}`,
            club_id: `${name}`,
            club_code: `${name}`,
            domestic_competition_id: `${competition}`,
            squad_size: `${squadSize}`,
            foreigners_number: `${foreignPlayerCount}`,
            foreigners_percentage: `${foreignPlayerPercentage}`,
            average_age: `${averageAge}`,
            stadium_name: `${stadiumName}`,
            stadium_seats: `${stadiumSeats}`,
            coach_name: `${coachName}`,
            net_transfer_record: `${netTransferRecord}`
          }).then(function (response) {
            alert('Document Added successfully');
          }).catch(function (err) {
            console.log(err);
          });

        setName("");
        setCompetition("");
        setSquadSize("");
        setForeignPlayerCount("");
        setForeignPlayerPercentage("");
        setAverageAge("");
        setStadiumName("");
        setStadiumSeats("");
        setCoachName("");
        setNetTransferRecord("");
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
            <label htmlFor="competition">Competition:</label>
            <input
                type="text"
                id="name"
                value={competition}
                onChange={(e) => setCompetition(e.target.value)}
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
            <label htmlFor="foreign_player_count">Foreign Player Count:</label>
            <input
                type="text"
                id="foreign_player_count"
                value={foreignPlayerCount}
                onChange={(e) => setForeignPlayerCount(e.target.value)}
                required />
        </div>
        <div>
            <label htmlFor="foreign_player_percentage">Foreign Player Percentage:</label>
            <input
                type="text"
                id="foreign_player_percentage"
                value={foreignPlayerPercentage}
                onChange={(e) => setForeignPlayerPercentage(e.target.value)}
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
        <div>
            <label htmlFor="net_transfer_record">Net Transfer Record:</label>
            <input
                type="text"
                id="net_transfer_record"
                value={netTransferRecord}
                onChange={(e) => setNetTransferRecord(e.target.value)}
                required />
        </div>
        <button type="submit">Submit</button>
    </form>
    </div>
);
};
export default AddDocument;
