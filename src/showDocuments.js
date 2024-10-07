import React, { useState, useEffect } from 'react';
import localDB from './db';

const ShowDocuments = () => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const fetchDocs = async () => {
          try {
            const allDocs = await localDB.allDocs({ include_docs: true });
            setDocs(allDocs.rows.map(row => row.doc));
          } catch (err) {
            console.error('Error fetching documents:', err);
          }
        };
        fetchDocs();
      }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
      };

return(
        <div>
        <form onSubmit={handleSubmit}>
            <h3>Below is a list of Football Teams!</h3>
            <table class ="dataTable">
            <tr>
                <th>Club Name</th>
                <th>Competition ID</th>
                <th>Coach Name</th>
                <th>Squad Size</th>
                <th>Average Age</th>
                <th>Stadium Name</th>
                <th>Stadium Seats</th>
                <th>Net Transfer Record</th>
            </tr>
            {docs.map(doc => (
            <tr key={doc._id}>
                <td>{doc.name}</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
            </tr>
            ))}
        </table>
        </form>
    </div>
);
}
export default ShowDocuments;