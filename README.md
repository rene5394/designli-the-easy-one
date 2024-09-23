**THE EASY ONE**

This project is built using the NestJS framework and uses pnpm for
package management. The project relies on environment variables stored
in a .env file. A sample .env.example file is provided for easy setup.

**Requirements**

- Node.js

- pnpm

- NestJS

**Installation**

1.  Clone the repository:

> git clone \<https://github.com/rene5394/designli-the-easy-one.git\>

2.  Navigate to the project directory:

> cd \<project-directory\>

3.  Install the dependencies using pnpm:

> pnpm install

4.  Create the .env file:

> cp .env.example .env

**Running the Application**

To run the application locally:

pnpm start:dev

The application should now be running on http://localhost:3010.

**Testing the API**

To test the POST request to the /ses-events endpoint:

1.  Make sure the server is running (http://localhost:3010).

2.  Create a POST request to http://localhost:3010/ses-events.

3.  The request body should contain the content of the ses-record.json
    file. You can use tools like Postman or cURL to make the request.

**.env Configuration**

Ensure that your .env file contains all the required variables to run
the application. Below is an example .env file structure:

PORT=3010

For more information on environment variables in NestJS, refer to the
NestJS documentation.
