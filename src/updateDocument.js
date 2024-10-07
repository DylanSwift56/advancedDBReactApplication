import React, { useState, useEffect } from 'react';
import { testLocalConnection, testRemoteConnection } from './db';

const UpdateDocument = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
      };

      useEffect(() => {
        // Function to test connections when the component mounts
        const testConnections = async () => {
            try {
                await testLocalConnection();
                await testRemoteConnection();
            } catch (error) {
                console.error('Connection test failed:', error);
            }
        };

        testConnections();
    }, []);

return(
    <div>
        <form onSubmit={handleSubmit}>
            <h3>Please Select a team to Update below!</h3>
        </form>
    </div>
);
}
export default UpdateDocument;