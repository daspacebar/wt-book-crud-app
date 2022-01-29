# BOOK MANAGEMENT CRUD APP

## TECH STACK USED:

React.Js(Frontend), MongoDB(Database), Node.Js/Express.Js(Backend/Apis/Routing)

### Libraries:

Bootstrap for all the frontend visible to the eye, and other React Libraries mentioned in the package.json in `client` folder.

Book Management Crud application basically focuses on 4 operations of data handling, i.e, Create, Read, Update and Delete data from the database of the local storage (JSON Webserver)

In this application data is stored in a MongoDB Cluster that helped me build and add custom database schema for my application.

### What it does?

1. Allows users to Create an entry of a book by adding it's Name, Author and the category it belongs to.
2. Allows users to Read all the data in a table format.
3. Allows users to Update the already inserted data by editing `Book Name` and `Author Name`.
4. Allows users to Delete the whole entry to of the book at once from the database.

### How is it built? (A brief overview)

1. Started with creating a vanilla nodejs server and kept it running using `nodemon`, installed all the necessary packages like `express` (nodejs framework to write api methods with ease), `mongoose` (to connect my MongoDB cluster to the nodejs server), `cors` (something important that i've learnt: it makes cross site api requests secure) and `dotenv` to fetch environment variables.

2. Created a cluster in MongoDB and connected it to my NodeJs server.
3. Created a bookModel Schema to define what the entries to be stored.
4. Created api methods to CRUD operations in `server/index.js`
5. Building the frontend, created components, created useStates and links to route correct endpoints.

### Screenshot of the app

![Home Page of the App](home.png)
