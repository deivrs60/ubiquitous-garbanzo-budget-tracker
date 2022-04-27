// create variable that holds the database connection 
let db;

// establish a connection to IndexedDB database called 'budget_tracker' and set t to version 1
const request = indexedDB.open('budget_tracker', 1)

// emits if the database version changes (nonexistant to version 1, v1 to v2, etc.)
request.onupgradeneeded = function(event) {
    // save reference to the database
    const db = event.target.result;
    // create an object table called 'new_budget', and sets it to have an auto incrementing primary key of sorts
    db.createObjectStore('new_transaction', { autoIncrement: true });
};

// upon a successful 
request.onsuccess = function(event) {
    // when db is successfully created with its object store (from onupgradeneeded above)
    // or simply established a connection, save reference to db in global variable
    db = event.target.result;

    // check if app is online, if yes run uploadTransaction() functino to send all local db data to api
    if (navigator.onLine) {
        // need to create first 
        // uploadTransaction();
    }
};

request.onerror  = function(event) {
    // log error here
    console.log(event.target.errorCode);
};