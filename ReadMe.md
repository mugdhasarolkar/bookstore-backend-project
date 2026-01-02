Project Overview
This project is a RESTful API application developed as part of a MERN stack internship program. The primary objective was to architect a fully functional backend system capable of handling complete CRUD (Create, Read, Update, Delete) operations with a focus on data integrity and error handling.

Development Note: The backend is fully operational and has been rigorously verified using Postman. The current focus of this repository is on the backend API implementation.

Tech Stack

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

API Testing: Postman

Features Implemented
RESTful API: Developed using Express.js.

Database Integration: Utilizes MongoDB and Mongoose for structured data storage and retrieval.

Full CRUD Support:

POST: Capability to create and store new data entries.

GET: Efficient retrieval of existing records from the database.

PUT: Logic to update and modify specific existing records.

DELETE: Functionality to securely remove data.

Error Handling: Implemented status code responses to ensure clear feedback for API requests.

API Documentation & Verification
The following API routes have been tested and verified via Postman:

1. Fetch All Items
Endpoint: GET /api/items
Action: Retrieves all data from the collection.

2. Create New Item
Endpoint: POST /api/items
Action: Adds a new entry to the database.

3. Update Existing Item
Endpoint: PUT /api/items/:id
Action: Updates data for a specific ID.

4. Delete Item
Endpoint: DELETE /api/items/:id
Action: Removes the record associated with a specific ID.
