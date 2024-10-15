import React, { useState, useEffect } from 'react';
import localDB from './db';
import UpdateDocument from './updateDocument';

const ShowDocuments = () => {
    const [docs, setDocs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
    const [docsPerPage] = useState(20); // Number of docs per page

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



    // Divide documents into pages as list was too long
    const indexOfLastDoc = currentPage * docsPerPage;
    const indexOfFirstDoc = indexOfLastDoc - docsPerPage;
    const currentDocs = docs.slice(indexOfFirstDoc, indexOfLastDoc);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const totalPages = Math.ceil(docs.length / docsPerPage);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Below is a list of Football Teams!</h3>
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
                        {currentDocs.map(doc => (
                            <tr key={doc._id}>
                                <td><input type="radio" name="id_buttons" id={doc._id}></input></td>
                                <td>{doc.name}</td>
                                <td>{doc.domestic_competition_id}</td>
                                <td>{doc.squad_size}</td>
                                <td>{doc.average_age}</td>
                                <td>{doc.foreigners_number}</td>
                                <td>{doc.foreigners_percentage}</td>
                                <td>{doc.stadium_name}</td>
                                <td>{doc.stadium_seats}</td>
                                <td>{doc.net_transfer_record}</td>
                            </tr>
                        ))}
                        {/* Arrows for navigating pages */}
                <div className="pagination">
                    <button 
                        onClick={() => paginate(currentPage - 1)} 
                        disabled={currentPage === 1}
                        aria-label="Previous">
                        &larr; {/* Left arrow */}
                    </button>

                    <button 
                        onClick={() => paginate(currentPage + 1)} 
                        disabled={currentPage === totalPages}
                        aria-label="Next">
                        &rarr; {/* Right arrow */}
                    </button>
                </div>
                    </tbody>
                    <button>Update</button>
                    <button>Delete</button>
                </table>
            </form>
        </div>
    );
};

export default ShowDocuments;
