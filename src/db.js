import PouchDB from 'pouchdb';

const localDB = new PouchDB('my_local_db');
const remoteDB = new PouchDB('http://admin:mtu12345@localhost:5984/teams');

async function testLocalConnection() {
    try {
        const info = await localDB.info();
        console.log('Local database connected successfully:', info);
    } catch (error) {
        console.error('Error connecting to local database:', error);
    }
}

async function testRemoteConnection() {
    try {
        const info = await remoteDB.info();
        console.log('Remote database connected successfully:', info);
    } catch (error) {
        console.error('Error connecting to remote database:', error);
    }
}

async function testConnections() {
    await testLocalConnection();
    await testRemoteConnection();
}

// Run the connection tests
testConnections();

export { localDB, remoteDB, testLocalConnection, testRemoteConnection };