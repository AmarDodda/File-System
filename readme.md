This project is a simple Node.js API that demonstrates file system operations using Express and the native fs module. The API provides two main functionalities:

-> Creating a text file with the current timestamp as its content.

Endpoint: /create-file
Method: POST
Description: This endpoint creates a text file in the files directory with the current timestamp as its content. The filename is generated based on the current date and time.

POSTMAN:

POST http://localhost:3000/create-file

-> Retrieving a list of all text files in a specific directory.

Endpoint: /files
Method: GET
Description: This endpoint retrieves a list of all .txt files in the files directory.

POSTMAN:

GET http://localhost:3000/files


