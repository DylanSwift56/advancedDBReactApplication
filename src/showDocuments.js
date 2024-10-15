import React, { useState, useEffect } from 'react';
import localDB from './db';

const ShowDocuments = () => {
    const [docs, setDocs] = useState([]);
    const [selectedDocId, setSelectedDocId] = useState(null); // Track selected document

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

    // Handle input change for editable fields
    const handleInputChange = (e, docId, field) => {
        const updatedDocs = docs.map(doc => {
            if (doc._id === docId) {
                return { ...doc, [field]: e.target.value }; // Update the specific field
            }
            return doc;
        });
        setDocs(updatedDocs); // Update state with new values
    };

    // Handle document update
    const handleUpdate = async () => {
        if (!selectedDocId) {
            alert('Please select a document to update!');
            return;
        }

        const docToUpdate = docs.find(doc => doc._id === selectedDocId);
        if (!docToUpdate) {
            alert('Document could not be found!');
            return;
        }

        try {
            await localDB.put(docToUpdate); // Save updated document to CouchDB
            alert('Document updated successfully!');
        } catch (err) {
            console.error('Error updating document:', err);
            alert('Failed to update document');
        }
    };

    // Handle document delete
    const handleDelete = async () => {
        if (!selectedDocId) {
            alert('Please select a document to delete!');
            return;
        }

        const docToDelete = docs.find(doc => doc._id === selectedDocId);
        if (!docToDelete) {
            alert('Document could not be found!');
            return;
        }

        try {
            await localDB.remove(docToDelete._id, docToDelete._rev);
            alert('Document deleted successfully!');

            // Update the document list in state
            setDocs(docs.filter(doc => doc._id !== selectedDocId));
        } catch (err) {
            console.error('Error deleting document:', err);
            alert('Failed to delete document');
        }
    };

    return (
        <div>
            <form>
                <h3>Below is a list of Football Teams!</h3>
                <h4>Select a team to Update or Delete</h4>
                <button type="button" onClick={handleDelete}>Delete</button>
                <button type="button" onClick={handleUpdate}>Update</button>
                <table className="dataTable">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Club Name</th>
                            <th>Competition</th>
                            <th>Squad Size</th>
                            <th>Average Age</th>
                            <th>Foreign Player Count</th>
                            <th>Foreign Player Percentage</th>
                            <th>Stadium Name</th>
                            <th>Stadium Seats</th>
                            <th>Net Transfer Record</th>
                        </tr>
                    </thead>
                    <tbody>
                        {docs.map(doc => (
                            <tr key={doc._id}>
                                <td>
                                    <input
                                        type="radio"
                                        name="id_buttons"
                                        id={doc._id}
                                        onChange={() => setSelectedDocId(doc._id)} // Track selected doc
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={doc.name}
                                        onChange={(e) => handleInputChange(e, doc._id, 'name')}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={doc.domestic_competition_id}
                                        onChange={(e) => handleInputChange(e, doc._id, 'domestic_competition_id')}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={doc.squad_size}
                                        onChange={(e) => handleInputChange(e, doc._id, 'squad_size')}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={doc.average_age}
                                        onChange={(e) => handleInputChange(e, doc._id, 'average_age')}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={doc.foreigners_number}
                                        onChange={(e) => handleInputChange(e, doc._id, 'foreigners_number')}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={doc.foreigners_percentage}
                                        onChange={(e) => handleInputChange(e, doc._id, 'foreigners_percentage')}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={doc.stadium_name}
                                        onChange={(e) => handleInputChange(e, doc._id, 'stadium_name')}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={doc.stadium_seats}
                                        onChange={(e) => handleInputChange(e, doc._id, 'stadium_seats')}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={doc.net_transfer_record}
                                        onChange={(e) => handleInputChange(e, doc._id, 'net_transfer_record')}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default ShowDocuments;
