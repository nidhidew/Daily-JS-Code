# GLOBAL OBJECT
In JavaScript, the global object is a special object that holds global variables, functions, and properties that are accessible from anywhere in your code. Depending on the environment 
where JavaScript is running, the global object can have different names:

1. **In a web browser environment**, the global object is usually referred to as `window`. In the browser, when you declare a variable or function outside of any function or block, 
it becomes a property of the `window` object.

   For example:
   ```javascript
   var globalVariable = 'Hello';
   function sayHello() {
       console.log(globalVariable);
   }
   console.log(window.globalVariable); // Accessing global variable using window object
   window.sayHello(); // Accessing global function using window object
   ```

2. **In Node.js or other JavaScript runtime environments**, the global object is referred to as `global`. It serves a similar purpose to the `window` object in browsers.

   For example:
   ```javascript
   global.globalVariable = 'Hello';
   function sayHello() {
       console.log(global.globalVariable);
   }
   console.log(global.globalVariable); // Accessing global variable using global object
   sayHello(); // Accessing global function directly
   ```

It's important to note that while global variables and functions are accessible from anywhere, it's generally considered a good practice to minimize the use of global variables to avoid 
potential conflicts and to make code more maintainable and modular. Using global variables excessively can lead to unexpected behavior and make code harder to reason about or debug. 
Instead, consider using modules or enclosing variables/functions within specific scopes to limit their visibility.


# WINDOW OBJECT
In web browsers, the `window` object is a crucial part of the browser's JavaScript implementation. It represents the browser window that contains the DOM (Document Object Model) as well 
as various properties and methods that interact with the browser.

Here are some key points about the `window` object in JavaScript:

1. **Global Scope**: In a web browser environment, the `window` object acts as the global object. Any variables or functions declared globally (outside any function or block) become 
properties and methods of the `window` object.

    For example:
    ```javascript
    var globalVariable = 'Hello';
    function sayHello() {
        console.log(globalVariable);
    }
    console.log(window.globalVariable); // Accessing global variable using window object
    window.sayHello(); // Accessing global function using window object
    ```

2. **Properties and Methods**: The `window` object provides access to various properties and methods that control the browser's behavior and interact with the environment. Some commonly 
used properties and methods include:
   
   - `window.document`: Represents the DOM document of the current page.
   - `window.alert()`, `window.prompt()`, `window.confirm()`: Methods to display alert boxes, prompt input from users, or confirm actions.
   - `window.location`: Contains information about the current URL and can be used to navigate to other pages.
   - `window.setTimeout()`, `window.setInterval()`: Functions to execute code after a certain delay or repeatedly at specified intervals.
   - And many more.

3. **Browser Window Features**: It provides access to information about the browser window itself, such as its size, position, history, and more.

4. **Global Scope Caveats**: While the `window` object provides a way to access global variables and functions, it's important to use global variables judiciously. Overusing global 
variables can lead to potential naming conflicts, security vulnerabilities, and make the code harder to maintain.

Keep in mind that the `window` object is specific to web browser environments and might not exist in other JavaScript environments like Node.js. It's a fundamental part of the browser's 
JavaScript API, offering a gateway to interact with various aspects of the browsing context and document.

# READ AND WRITE FILES

In Node.js, you can read and write files using the built-in `fs` (File System) module, which provides methods for interacting with the file system.
 Here's how you can perform file read and write operations:

### Reading Files:

1. **Reading Synchronously**:
   To read a file synchronously (blocking the execution until the file is read), you can use `fs.readFileSync()`:
   
   ```javascript
   const fs = require('fs');

   try {
       const data = fs.readFileSync('file.txt', 'utf8');
       console.log(data);
   } catch (err) {
       console.error('Error reading file:', err);
   }
   ```

2. **Reading Asynchronously**:
   To read a file asynchronously (non-blocking), use `fs.readFile()`:

   ```javascript
   const fs = require('fs');

   fs.readFile('file.txt', 'utf8', (err, data) => {
       if (err) {
           console.error('Error reading file:', err);
           return;
       }
       console.log(data);
   });
   ```

### Writing Files:

1. **Writing Synchronously**:
   To write to a file synchronously (blocking the execution until the file is written), you can use `fs.writeFileSync()`:

   ```javascript
   const fs = require('fs');

   try {
       fs.writeFileSync('output.txt', 'Data to write', 'utf8');
       console.log('File written successfully');
   } catch (err) {
       console.error('Error writing file:', err);
   }
   ```

2. **Writing Asynchronously**:
   To write to a file asynchronously (non-blocking), use `fs.writeFile()`:

   ```javascript
   const fs = require('fs');

   fs.writeFile('output.txt', 'Data to write', 'utf8', (err) => {
       if (err) {
           console.error('Error writing file:', err);
           return;
       }
       console.log('File written successfully');
   });
   ```

### Additional Notes:

- The `'utf8'` parameter specifies the encoding of the file. It's commonly used for reading and writing text files.
- Node.js provides various other options and methods in the `fs` module for file manipulation, such as creating directories, appending data to
 files, renaming files, and more. Ensure proper error handling in your code, especially when dealing with file operations, as errors can occur due
  to various reasons like file not found, insufficient permissions, etc.

Always handle errors appropriately to ensure robustness in your file operations.

# Append File
In Node.js, the `fs.appendFile()` method is used to asynchronously append data to a file. It creates the file if it does not exist and appends the specified content to 
the end of the file. If the file already exists, the content will be appended to the existing file content.

Here is an example demonstrating how to use `fs.appendFile()`:

```javascript
const fs = require('fs');

// Data to append to the file
const contentToAppend = 'This is additional content.\n';

// Append data to a file asynchronously
fs.appendFile('example.txt', contentToAppend, 'utf8', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Content appended to file successfully.');
});
```

This code snippet demonstrates appending the specified content (`contentToAppend`) to the file named `'example.txt'` using the `fs.appendFile()` method. The file will 
be created if it doesn't exist, and if it does exist, the content will be added to the end of the existing file content.

The parameters for `fs.appendFile()` are:
- `path`: The file path.
- `data`: The content to append to the file.
- `options` (optional): Options object or string specifying the file encoding and mode.
- `callback`: A callback function that gets called after the operation completes. The callback function receives an error as its argument if an error occurs during the 
file appending process.

Remember to handle errors appropriately in the callback function to ensure that your code responds correctly to potential issues during the file append operation.

# Rename File

In Node.js, you can rename a file using the `fs.rename()` method provided by the `fs` (File System) module. Here's an example demonstrating how to rename a file:

```javascript
const fs = require('fs');

const oldFileName = 'oldfile.txt';
const newFileName = 'newfile.txt';

fs.rename(oldFileName, newFileName, (err) => {
    if (err) {
        console.error('Error renaming file:', err);
        return;
    }
    console.log('File renamed successfully');
});
```

Explanation:

1. **Require the `fs` module:** Import the `fs` module, which provides file system-related methods in Node.js.

2. **Specify the old and new file names:** Set the `oldFileName` variable to the current name of the file and `newFileName` to the desired new name for the file.

3. **Use `fs.rename()`:** Call the `fs.rename()` function, passing in the `oldFileName`, `newFileName`, and a callback function. The callback function is executed once 
the renaming operation is complete. If an error occurs during renaming, it will be caught in the `err` parameter.

Remember to handle errors appropriately to ensure that your code behaves as expected. This example assumes that both the old and new file names are in the same 
directory. Additionally, make sure that the Node.js process has the necessary permissions to perform the file renaming operation in the specified directory.

## NOTE ---------------------------------------------------------------------------------------------------------------------------------------------------------------

for doing read,write,append and rename the file in synchronously form there is a one way to do it where we will call one functionalty inside another functionality. For
more clear vision eg:

function_1(){
    return function_2(){
        return function_3(){

        }
    }
}

function_1();

this is called callback hell because once the number of functions increase it will become more dificult to work with. To solve this problem we should use promises.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Promises
In Node.js, the `fs.unlink()` method is used to delete or remove a file asynchronously. This method is part of the `fs` (File System) module and is used to delete the specified file from the filesystem.

Here's an example demonstrating how to use `fs.unlink()`:

```javascript
const fs = require('fs');

const fileName = 'fileToDelete.txt';

fs.unlink(fileName, (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully');
});
```

Explanation:

1. **Require the `fs` module:** Import the `fs` module, which provides file system-related methods in Node.js.

2. **Specify the file name:** Set the `fileName` variable to the name of the file you want to delete.

3. **Use `fs.unlink()`:** Call the `fs.unlink()` function, passing in the `fileName` and a callback function. The callback function is executed once the deletion operation is complete. If an error occurs during deletion, it will be caught in the `err` parameter.

Remember that `fs.unlink()` is an asynchronous method, so it won't block the execution of other code while it deletes the file. Ensure proper error handling, especially when dealing with file deletion, as errors can occur due to various reasons like insufficient permissions, file not found, etc.

Always handle errors appropriately to ensure that your code behaves as expected and to provide adequate feedback in case of failures during file deletion.


# createReadstream and createWritestream

In Node.js, `createReadStream()` and `createWriteStream()` are methods provided by the `fs` (File System) module for working with file streams. These methods allow you to efficiently read data from a file or write data to a file asynchronously using streams.

### createReadStream()

The `createReadStream()` method is used to create a readable stream from a file. It enables reading data from a file in chunks, which can be beneficial for handling large files without consuming a large amount of memory.

Example of using `createReadStream()`:

```javascript
const fs = require('fs');

const readableStream = fs.createReadStream('input.txt', 'utf8');

readableStream.on('data', (chunk) => {
    console.log('Received chunk of data:');
    console.log(chunk);
});

readableStream.on('end', () => {
    console.log('Reading finished');
});

readableStream.on('error', (err) => {
    console.error('Error reading file:', err);
});
```

Explanation:

- `fs.createReadStream()` creates a readable stream from the file 'input.txt'. You can specify the file path and encoding (optional) as parameters.
- The `readableStream` object emits events like `'data'` (when a chunk of data is available), `'end'` (when reading finishes), and `'error'` (when an error occurs while reading).

### createWriteStream()

The `createWriteStream()` method is used to create a writable stream to a file. It enables writing data to a file in chunks, which is useful when dealing with large amounts of data.

Example of using `createWriteStream()`:

```javascript
const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt', 'utf8');

writableStream.write('Data to write\n');
writableStream.write('More data\n');

writableStream.end('Final data', () => {
    console.log('Writing finished');
});

writableStream.on('error', (err) => {
    console.error('Error writing to file:', err);
});
```

Explanation:

- `fs.createWriteStream()` creates a writable stream to the file 'output.txt'. You can specify the file path and encoding (optional) as parameters.
- `writableStream.write()` is used to write data to the stream in chunks. `writableStream.end()` is used to signal the end of writing and optionally write any final data. It also takes a callback that executes when writing finishes.
- The `writableStream` object emits an `'error'` event if an error occurs while writing.

Using streams with `createReadStream()` and `createWriteStream()` is advantageous for handling large files or significant amounts of data efficiently, as it helps in managing memory usage and enhances performance compared to reading or writing the entire file content at once.

# pipe

In Node.js, the `pipe()` method is used to easily transfer data between streams. It allows you to connect the output of one stream to the input of another stream, enabling a seamless flow of data from a readable stream to a writable stream.

The `pipe()` method is especially useful when dealing with file streams or network operations, as it simplifies the process of reading data from a readable stream and writing it to a writable stream without manually managing the data events and handling.

Here's an example demonstrating how `pipe()` can be used to transfer data from a readable stream to a writable stream:

```javascript
const fs = require('fs');

// Creating a readable stream from input.txt
const readableStream = fs.createReadStream('input.txt', 'utf8');

// Creating a writable stream to output.txt
const writableStream = fs.createWriteStream('output.txt', 'utf8');

// Pipe data from readable stream to writable stream
readableStream.pipe(writableStream);

// Listening for the 'finish' event to know when the pipe operation is complete
writableStream.on('finish', () => {
    console.log('Data has been written to output.txt');
});

// Handling errors if they occur during the pipe operation
readableStream.on('error', (err) => {
    console.error('Error reading file:', err);
});

writableStream.on('error', (err) => {
    console.error('Error writing to file:', err);
});
```

Explanation:

- `fs.createReadStream()` creates a readable stream from the file 'input.txt'.
- `fs.createWriteStream()` creates a writable stream to the file 'output.txt'.
- `readableStream.pipe(writableStream)` pipes the data from the readable stream to the writable stream, allowing the data to be transferred from 'input.txt' to 'output.txt'.
- The `'finish'` event on the `writableStream` is triggered when the entire data transfer is complete.
- Error handling is implemented to catch and log any errors that might occur during the read or write operations.

Using `pipe()` simplifies the process of transferring data between streams and is particularly useful for copying files, handling HTTP requests and responses, or any scenario where you need to move data between different streams efficiently in Node.js.

# mkdir

In Node.js, the `fs` (File System) module provides the `mkdir()` function, allowing you to create a new directory (folder) asynchronously.

Here's an example of how to use `fs.mkdir()`:

### Using fs.mkdir() to create a directory:

```javascript
const fs = require('fs');

const directoryName = 'new_directory';

fs.mkdir(directoryName, (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    console.log(`Directory '${directoryName}' created successfully`);
});
```

Explanation:

- `fs.mkdir()` creates a new directory with the specified name (in this case, `'new_directory'`).
- The second argument is a callback function that gets executed once the directory creation is attempted. If an error occurs during the creation process, it will be caught in the `err` parameter.
- If the directory creation is successful, it will log a success message indicating that the directory has been created.

Ensure that you have appropriate permissions to create directories in the specified location. Also, be mindful that if the directory already exists, calling `fs.mkdir()` will result in an error unless you handle it specifically or check if the directory exists before attempting to create it.

Additionally, Node.js also provides the `fs.mkdirSync()` method, which is the synchronous version of `fs.mkdir()`. It blocks the execution of further code until the directory creation is complete or an error occurs. Here's an example:

### Using fs.mkdirSync() to synchronously create a directory:

```javascript
const fs = require('fs');

const directoryName = 'new_directory_sync';

try {
    fs.mkdirSync(directoryName);
    console.log(`Directory '${directoryName}' created successfully`);
} catch (err) {
    console.error('Error creating directory:', err);
}
```

Both methods (`fs.mkdir()` and `fs.mkdirSync()`) achieve the same goal of creating a directory, but `fs.mkdir()` is non-blocking and uses a callback for handling, while `fs.mkdirSync()` is blocking and relies on error handling using try-catch blocks. Use them according to the requirements of your application and its flow.

const fs = require('fs');

if (!fs.existsSync(directory_name)) {
    fs.mkdir(directory_name, (err) => {
        if (err) throw err;
        console.log('Directory created');
    });
}

- `fs.existsSync(directory_name)` checks whether the directory already exists or not. If it does exist, it will do nothing
- if in condition it says that directory exists and output is true then it will create or do whatever in the statement says.

# npm modules

NPM (Node Package Manager) is the default package manager for Node.js, providing access to a vast ecosystem of open-source JavaScript packages/modules that you can use in your Node.js projects. These packages/modules are shared by developers worldwide and cover a wide range of functionalities, from utility functions to frameworks, libraries, and tools.

Here's a brief overview of working with npm modules:

### Installing npm Packages:

To use an npm package in your Node.js project, you first need to install it. You can do this using the `npm install` command followed by the package name. For example:

```bash
npm install package-name
```

- If you want to save the package as a dependency in your `package.json` file, use `npm install package-name --save`.
- To save the package as a development dependency, used during development but not in production, use `npm install package-name --save-dev`.

### Using Installed Modules:

Once you've installed a package, you can use it in your Node.js application by requiring it in your code using `require()`.

For example, if you've installed the `lodash` package:

```javascript
const _ = require('lodash');

// Now you can use lodash functions, for example:
const result = _.capitalize('hello'); // This will capitalize the string 'hello'
console.log(result); // Output: 'Hello'
```

### Listing Installed Packages:

You can see the installed packages and their versions in your project by using:

```bash
npm list
```

This command shows a tree view of all installed packages and their dependencies.

### Managing Versions:

NPM allows you to specify version ranges for packages in `package.json` using semantic versioning. For example:

```json
{
  "dependencies": {
    "package-name": "^1.2.3"
  }
}
```

In this example, `^1.2.3` means any version compatible with `1.2.3`, up to the next major version.

### Publishing Your Own Packages:

You can also publish your own Node.js modules/packages to the npm registry. Use `npm login` to authenticate yourself and then `npm publish` to publish your package.

### Updating Packages:

To update installed packages to their latest versions within your project, you can use:

```bash
npm update
```

This command updates all packages to their latest compatible versions according to the version ranges specified in `package.json`.

The npm ecosystem is extensive, with thousands of modules available to simplify development and add various functionalities to your Node.js projects. Always refer to the documentation of each package for usage instructions, guidelines, and examples specific to that package.

NOTE - check npm documentation

# nodemon command

The command `npm i nodemon -g` is used to install the `nodemon` package globally using npm. Let's break down what this command does:

- `npm`: This command-line tool is used to interact with the Node Package Manager to install, manage, and publish packages.

- `i` or `install`: This is the npm command to install packages.

- `nodemon`: This is the name of the package that you want to install. `nodemon` is a tool that helps in developing Node.js applications by automatically restarting the Node application when file changes are detected.

- `-g`: This flag stands for "global" and indicates that the package should be installed globally on your system rather than as a dependency within a specific project. Installing a package globally makes it accessible from any directory in your terminal.

So, when you execute `npm i nodemon -g`, it installs `nodemon` globally on your system. After the installation, you can use `nodemon` in your command line to run Node.js applications. For example:

```bash
nodemon your-node-app.js
```

This command will start your Node.js application and monitor for changes in the files. If any changes are detected, `nodemon` will automatically restart the application, saving you the manual effort of stopping and restarting the server every time you make changes to your code.

Note: Installing packages globally (`-g`) has both advantages and disadvantages. Global packages are available across all your projects but may sometimes lead to version conflicts or permissions issues. It's often recommended to install packages locally within your projects unless you need a tool to be accessible system-wide.

- when you run npm init and npm install, it will help to create package.json and package-lock.json files which helps to input the dependecies for the project, write scripts for running , starting and debugging etc.

- "scripts": {
    "start": "node index",
    "dev": "nodemon index"
  },

  start will help to run index file which is project main file and it will start the project.

  dev will help to run the project and also you can check there logs in the terminal to see the status of the project or file. dev is a custom script that uses nodemon instead of just using node so if any change in our code happens then server restarts automatically.


# log events

- in that first we create logEvents.js file and import that in index.js because that one is our main file in the project.
- next write a code for creating a file in the saperate directory and import the logs in that file in place of in terminal to store.
- basically whatever will be the logs we want to print in the console it will be stored in the log file which can be a text file also.

# build a server

To build a basic server using Node.js, you can use the built-in `http` module, which provides the necessary tools to create an HTTP server. Here's a simple example of creating a server that listens on a specific port and responds with a "Hello, World!" message for incoming requests:

```javascript
// Import the required modules
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response HTTP header with a 200 OK status and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body as "Hello, World!"
    res.end('Hello, World!\n');
});

// Define the port the server will listen on
const port = 3000;

// Start the server and listen on the defined port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
```

Here's a breakdown of what this code does:

1. **Importing the `http` module:**
   The `http` module is a core module in Node.js used for creating HTTP servers and handling HTTP requests and responses.

2. **Creating an HTTP server:**
   The `http.createServer()` method creates an HTTP server instance. It takes a callback function with two parameters: `req` (the request object) and `res` (the response object). In this example, the server responds with a "Hello, World!" message for all incoming requests.

3. **Setting response headers and sending a response:**
   Inside the request callback, `res.writeHead()` sets the HTTP status code to `200` (OK) and defines the content type as `text/plain`. `res.end()` sends the response body with the message "Hello, World!\n" and ends the response.

4. **Defining the port and starting the server:**
   The `port` variable specifies the port number the server will listen on (in this case, `3000`). `server.listen()` starts the server and listens on the specified port. When the server starts successfully, a message is logged to the console.

To run this Node.js server, save the code in a file (e.g., `server.js`) and execute it using Node.js via the terminal:

```bash
node server.js
```

After starting the server, you can access it by navigating to `http://localhost:3000/` in a web browser or making HTTP requests using tools like cURL or Postman.

# express

Express.js is a popular web application framework for Node.js that simplifies the process of building web applications and APIs by providing a robust set of features and tools. It is designed to provide a minimal and flexible structure for web applications, allowing developers to create powerful and scalable web applications with ease.

Key features and aspects of Express.js:

1. **Routing**: Express provides a simple and efficient way to define routes for handling different HTTP methods (GET, POST, PUT, DELETE, etc.) and URL paths. Route handling allows developers to create endpoints and define the actions to be taken when specific routes are accessed.

2. **Middleware**: Middleware functions are a core concept in Express. They enable developers to modify incoming requests or outgoing responses, perform authentication, logging, error handling, and more. Express middleware functions can be used at the application level or for specific routes.

3. **Template Engines**: Express supports various template engines like EJS, Pug (formerly Jade), Handlebars, etc., allowing you to dynamically generate HTML content by rendering views/templates and passing data to them.

4. **Static File Serving**: Express simplifies serving static files such as images, CSS, JavaScript, etc., using the `express.static` middleware.

5. **Error Handling**: Express provides mechanisms to handle errors gracefully using middleware, allowing for centralized error handling within an application.

6. **Integration with Node.js**: Express.js is built on top of Node.js and provides a higher level of abstraction, making it easier to build web applications while leveraging the capabilities of Node.js.

Express.js is highly extensible and has a large ecosystem of middleware and plugins available, allowing developers to add additional functionality as needed, such as authentication, database integration (with ORMs like Mongoose for MongoDB or Sequelize for SQL databases), session management, and more.

To use Express.js in a Node.js project, you need to install it via npm:

```bash
npm install express
```

After installing Express, you can create an Express application by requiring it and starting a server:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
```

Express.js significantly simplifies the process of building web applications and APIs in Node.js, making it a popular choice among developers due to its simplicity, flexibility, and robust features.

# Middleware

In Node.js, middleware functions are an integral part of frameworks like Express.js and other similar web frameworks. Middleware functions are functions that have access to the request and response objects in an Express application's request-response cycle. They can modify request and response objects, execute additional code, terminate the request-response cycle, or call the next middleware function in the stack.

Middleware functions in Express.js are executed sequentially in the order they are declared, and they can perform various tasks such as logging, authentication, handling errors, parsing request bodies, etc.

Here's an example of how middleware works in Express.js:

```javascript
const express = require('express');
const app = express();

// Middleware function to log incoming requests
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware function
});

// Another middleware function to handle authentication
app.use((req, res, next) => {
  // Check if user is authenticated (dummy example)
  const isAuthenticated = true; // You'd typically have a real authentication logic here
  
  if (isAuthenticated) {
    next(); // User is authenticated, proceed to the next middleware
  } else {
    res.status(401).send('Unauthorized'); // User is not authenticated
  }
});

// Route handler
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

In this example:
- `app.use()` is used to define middleware functions. These functions take three parameters: `req`, `res`, and `next`.
- The first middleware logs information about incoming requests.
- The second middleware checks for authentication before allowing access to routes.
- `app.get()` defines a route handler for the '/' route.
- There's an error handling middleware at the end to handle any errors that occur during the request-response cycle.

Middleware functions are powerful in Express.js and allow developers to modularize and reuse code, separate concerns, and add functionalities to the request-handling process. They play a significant role in building robust and scalable Node.js applications.

# Routing

Routing in Node.js refers to the process of determining how an application responds to a client request at a particular endpoint, or URL. In web frameworks like Express.js, routing involves defining routes that match specific HTTP methods (GET, POST, PUT, DELETE, etc.) and URLs, and specifying the actions to be taken when a request matches those routes.

Here's a basic example of how routing works in an Express.js application:

```javascript
const express = require('express');
const app = express();

// Route handler for the homepage
app.get('/', (req, res) => {
  res.send('This is the homepage');
});

// Route handler for '/about' page
app.get('/about', (req, res) => {
  res.send('About page');
});

// Route handler with URL parameters
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`User ID: ${userId}`);
});

// Handling POST requests
app.post('/login', (req, res) => {
  // Handle login logic here
  res.send('Login successful');
});

// 404 Not Found - This will be executed if no route is matched
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

In this example:
- `app.get()`, `app.post()`, etc., are methods used to define routes for specific HTTP methods.
- The first argument is the URL path for the route.
- The second argument is a callback function that gets executed when a request matches that route. It takes `req` (request) and `res` (response) as parameters.
- `req.params` contains URL parameters specified in the route (e.g., `:userId`).
- `app.use()` is used to define a middleware that handles requests that don't match any defined routes. In this case, it sends a 404 Not Found response.

Express.js provides a flexible and powerful routing system that allows you to create complex APIs and web applications by defining various routes and their corresponding actions. You can create middleware functions, handle different HTTP methods, parse URL parameters, and more using Express's routing capabilities.


# MVC REST API

Creating a basic MVC (Model-View-Controller) REST API in Node.js involves setting up a server, defining routes, creating controllers to handle the business logic, and interacting with a database as needed. Here's a simple example using Express.js as the web framework and MongoDB as the database.

1. **Install Dependencies:**
   Make sure you have Node.js installed. Create a new directory for your project, navigate to it in the terminal, and run the following commands:

   ```bash
   npm init -y
   npm install express mongoose body-parser
   ```

2. **Project Structure:**
   Create the following project structure:

   ```
   /your-project
   ├── /controllers
   |   └── UserController.js
   ├── /models
   |   └── User.js
   ├── /routes
   |   └── api.js
   ├── app.js
   └── .env
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root of your project and define your MongoDB connection string:

   ```env
   MONGO_URI=mongodb://localhost:27017/your-database
   ```

4. **Create Models:**
   Define your data models. In this example, we'll create a simple `User` model in `models/User.js`:

   ```javascript
   // models/User.js
   const mongoose = require('mongoose');

   const userSchema = new mongoose.Schema({
     username: { type: String, required: true },
     email: { type: String, required: true },
     password: { type: String, required: true },
   });

   module.exports = mongoose.model('User', userSchema);
   ```

5. **Create Controllers:**
   Implement controllers to handle the business logic. Create `controllers/UserController.js`:

   ```javascript
   // controllers/UserController.js
   const User = require('../models/User');

   exports.getAllUsers = async (req, res) => {
     try {
       const users = await User.find();
       res.json(users);
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   };

   exports.createUser = async (req, res) => {
     try {
       const user = await User.create(req.body);
       res.status(201).json(user);
     } catch (error) {
       res.status(400).json({ error: error.message });
     }
   };
   ```

6. **Create Routes:**
   Define routes to map HTTP requests to controller methods. Create `routes/api.js`:

   ```javascript
   // routes/api.js
   const express = require('express');
   const router = express.Router();
   const UserController = require('../controllers/UserController');

   // GET /api/users
   router.get('/users', UserController.getAllUsers);

   // POST /api/users
   router.post('/users', UserController.createUser);

   module.exports = router;
   ```

7. **Set Up Express Server:**
   Create `app.js` to set up the Express server:

   ```javascript
   // app.js
   const express = require('express');
   const mongoose = require('mongoose');
   const bodyParser = require('body-parser');
   require('dotenv').config();

   const app = express();
   const PORT = process.env.PORT || 3000;

   // Connect to MongoDB
   mongoose.connect(process.env.MONGO_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });

   // Middleware
   app.use(bodyParser.json());

   // Routes
   const apiRoutes = require('./routes/api');
   app.use('/api', apiRoutes);

   // Start server
   app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```

8. **Run the Application:**
   Start your application by running:

   ```bash
   node app.js
   ```

Now, your basic MVC REST API is up and running. You can use tools like Postman to test your API endpoints.

Remember to enhance the project as needed, handle authentication, validation, and add more features based on your application requirements.

# Authentication

Authentication in Node.js can be implemented using various methods, and one common approach is to use JSON Web Tokens (JWT) along with a middleware like Passport.js. Here's a step-by-step guide on implementing basic authentication in a Node.js application:

1. **Install Dependencies:**
   Start by installing the necessary packages:

   ```bash
   npm install express mongoose body-parser jsonwebtoken passport passport-local passport-jwt bcrypt
   ```

2. **Set Up Project Structure:**
   Create the following project structure:

   ```
   /your-project
   ├── /controllers
   |   └── AuthController.js
   ├── /models
   |   └── User.js
   ├── /routes
   |   ├── api.js
   |   └── auth.js
   ├── app.js
   └── .env
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root of your project and define a secret key for JWT:

   ```env
   JWT_SECRET=your-secret-key
   ```

4. **Create Models:**
   Define a `User` model in `models/User.js`:

   ```javascript
   // models/User.js
   const mongoose = require('mongoose');

   const userSchema = new mongoose.Schema({
     username: { type: String, required: true },
     password: { type: String, required: true },
   });

   module.exports = mongoose.model('User', userSchema);
   ```

5. **Create Authentication Controller:**
   Implement an authentication controller in `controllers/AuthController.js`:

   ```javascript
   // controllers/AuthController.js
   const User = require('../models/User');
   const bcrypt = require('bcrypt');
   const jwt = require('jsonwebtoken');
   require('dotenv').config();

   exports.register = async (req, res) => {
     try {
       const { username, password } = req.body;
       const hashedPassword = await bcrypt.hash(password, 10);
       const user = await User.create({ username, password: hashedPassword });
       res.status(201).json(user);
     } catch (error) {
       res.status(400).json({ error: error.message });
     }
   };

   exports.login = async (req, res) => {
     try {
       const { username, password } = req.body;
       const user = await User.findOne({ username });

       if (!user) {
         return res.status(401).json({ error: 'Invalid credentials' });
       }

       const isPasswordValid = await bcrypt.compare(password, user.password);

       if (!isPasswordValid) {
         return res.status(401).json({ error: 'Invalid credentials' });
       }

       const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

       res.json({ token });
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   };
   ```

6. **Create Authentication Routes:**
   Define authentication routes in `routes/auth.js`:

   ```javascript
   // routes/auth.js
   const express = require('express');
   const router = express.Router();
   const AuthController = require('../controllers/AuthController');

   // POST /api/auth/register
   router.post('/register', AuthController.register);

   // POST /api/auth/login
   router.post('/login', AuthController.login);

   module.exports = router;
   ```

7. **Set Up Express Server:**
   Update `app.js` to include the authentication routes and middleware:

   ```javascript
   // app.js
   const express = require('express');
   const mongoose = require('mongoose');
   const bodyParser = require('body-parser');
   const passport = require('passport');
   const passportJWT = require('passport-jwt');
   const LocalStrategy = require('passport-local').Strategy;
   const User = require('./models/User');
   require('dotenv').config();

   const app = express();
   const PORT = process.env.PORT || 3000;

   // Connect to MongoDB
   mongoose.connect(process.env.MONGO_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });

   // Middleware
   app.use(bodyParser.json());
   app.use(passport.initialize());

   // Passport Local Strategy
   passport.use(
     new LocalStrategy(async (username, password, done) => {
       try {
         const user = await User.findOne({ username });

         if (!user) {
           return done(null, false, { message: 'Invalid credentials' });
         }

         const isPasswordValid = await bcrypt.compare(password, user.password);

         if (!isPasswordValid) {
           return done(null, false, { message: 'Invalid credentials' });
         }

         return done(null, user);
       } catch (error) {
         return done(error);
       }
     })
   );

   // Passport JWT Strategy
   const ExtractJWT = passportJWT.ExtractJwt;
   const JWTStrategy = passportJWT.Strategy;

   passport.use(
     new JWTStrategy(
       {
         jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
         secretOrKey: process.env.JWT_SECRET,
       },
       async (jwtPayload, done) => {
         try {
           const user = await User.findById(jwtPayload.userId);

           if (!user) {
             return done(null, false, { message: 'User not found' });
           }

           return done(null, user);
         } catch (error) {
           return done(error);
         }
       }
     )
   );

   // Routes
   const apiRoutes = require('./routes/api');
   const authRoutes = require('./routes/auth');
   app.use('/api', passport.authenticate('jwt', { session: false }), apiRoutes);
   app.use('/api/auth', auth

Routes);

   // Start server
   app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```

   In this example, the Passport Local Strategy is used for the login route, and the Passport JWT Strategy is used to protect the other API routes. The `passport.authenticate('jwt', { session: false })` middleware is applied to the `/api` routes to ensure that only authenticated users can access them.

8. **Test the Authentication:**
   Use tools like Postman to test the registration and login endpoints. After successfully logging in, you can include the generated JWT token in the Authorization header of your requests to access the protected API routes.

This is a basic setup for authentication in a Node.js application. Depending on your specific requirements, you might want to add additional features such as user roles, token expiration handling, refresh tokens, etc. Additionally, consider using HTTPS in a production environment for secure communication.

# JWT Auth

Implementing JWT (JSON Web Token) authentication in Node.js involves creating and verifying tokens for user authentication. Below is a step-by-step guide using Node.js, Express, and the `jsonwebtoken` library.

1. **Install Dependencies:**
   Start by installing the necessary packages:

   ```bash
   npm install express mongoose body-parser jsonwebtoken
   ```

2. **Set Up Project Structure:**
   Create the following project structure:

   ```
   /your-project
   ├── /controllers
   |   └── AuthController.js
   ├── /models
   |   └── User.js
   ├── /routes
   |   └── api.js
   ├── app.js
   └── .env
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root of your project and define a secret key for JWT:

   ```env
   JWT_SECRET=your-secret-key
   ```

4. **Create Models:**
   Define a `User` model in `models/User.js`:

   ```javascript
   // models/User.js
   const mongoose = require('mongoose');

   const userSchema = new mongoose.Schema({
     username: { type: String, required: true },
     password: { type: String, required: true },
   });

   module.exports = mongoose.model('User', userSchema);
   ```

5. **Create Authentication Controller:**
   Implement an authentication controller in `controllers/AuthController.js`:

   ```javascript
   // controllers/AuthController.js
   const User = require('../models/User');
   const bcrypt = require('bcrypt');
   const jwt = require('jsonwebtoken');
   require('dotenv').config();

   exports.register = async (req, res) => {
     try {
       const { username, password } = req.body;
       const hashedPassword = await bcrypt.hash(password, 10);
       const user = await User.create({ username, password: hashedPassword });
       res.status(201).json(user);
     } catch (error) {
       res.status(400).json({ error: error.message });
     }
   };

   exports.login = async (req, res) => {
     try {
       const { username, password } = req.body;
       const user = await User.findOne({ username });

       if (!user) {
         return res.status(401).json({ error: 'Invalid credentials' });
       }

       const isPasswordValid = await bcrypt.compare(password, user.password);

       if (!isPasswordValid) {
         return res.status(401).json({ error: 'Invalid credentials' });
       }

       const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

       res.json({ token });
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   };
   ```

6. **Create Authentication Routes:**
   Define authentication routes in `routes/auth.js`:

   ```javascript
   // routes/auth.js
   const express = require('express');
   const router = express.Router();
   const AuthController = require('../controllers/AuthController');

   // POST /api/auth/register
   router.post('/register', AuthController.register);

   // POST /api/auth/login
   router.post('/login', AuthController.login);

   module.exports = router;
   ```

7. **Set Up Express Server:**
   Update `app.js` to include the authentication routes and middleware:

   ```javascript
   // app.js
   const express = require('express');
   const mongoose = require('mongoose');
   const bodyParser = require('body-parser');
   const jwt = require('jsonwebtoken');
   require('dotenv').config();

   const app = express();
   const PORT = process.env.PORT || 3000;

   // Connect to MongoDB
   mongoose.connect(process.env.MONGO_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });

   // Middleware
   app.use(bodyParser.json());

   // Routes
   const authRoutes = require('./routes/auth');
   app.use('/api/auth', authRoutes);

   // Start server
   app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```

   This example focuses on the registration and login endpoints. The `jsonwebtoken` library is used to generate JWT tokens upon successful login.

8. **Testing the Authentication:**
   Use tools like Postman to test the registration and login endpoints. After successfully logging in, you can include the generated JWT token in the Authorization header of your requests to access protected resources.

This is a basic setup for JWT authentication in a Node.js application. Depending on your specific requirements, you might want to add additional features such as token expiration handling, refresh tokens, user roles, etc.

# User Roles | Authorization

Implementing user roles and authorization in Node.js involves assigning roles to users and checking these roles to grant or deny access to certain resources or actions. Below is an example of how you can implement user roles and authorization using Node.js, Express, and JWT.

Let's extend the previous example with user roles:

1. **Update the User Model:**
   Extend the `User` model in `models/User.js` to include a `role` field:

   ```javascript
   // models/User.js
   const mongoose = require('mongoose');

   const userSchema = new mongoose.Schema({
     username: { type: String, required: true },
     password: { type: String, required: true },
     role: { type: String, enum: ['user', 'admin'], default: 'user' }, // Add role field
   });

   module.exports = mongoose.model('User', userSchema);
   ```

   In this example, users can have either the 'user' or 'admin' role.

2. **Update the Authentication Controller:**
   Update `controllers/AuthController.js` to include the user's role in the JWT token:

   ```javascript
   // controllers/AuthController.js
   const User = require('../models/User');
   const bcrypt = require('bcrypt');
   const jwt = require('jsonwebtoken');
   require('dotenv').config();

   exports.register = async (req, res) => {
     try {
       const { username, password, role } = req.body;
       const hashedPassword = await bcrypt.hash(password, 10);
       const user = await User.create({ username, password: hashedPassword, role });
       res.status(201).json(user);
     } catch (error) {
       res.status(400).json({ error: error.message });
     }
   };

   exports.login = async (req, res) => {
     try {
       const { username, password } = req.body;
       const user = await User.findOne({ username });

       if (!user) {
         return res.status(401).json({ error: 'Invalid credentials' });
       }

       const isPasswordValid = await bcrypt.compare(password, user.password);

       if (!isPasswordValid) {
         return res.status(401).json({ error: 'Invalid credentials' });
       }

       const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
         expiresIn: '1h',
       });

       res.json({ token });
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   };
   ```

3. **Create Authorization Middleware:**
   Create a middleware function in `middlewares/auth.js` to check user roles and grant or deny access:

   ```javascript
   // middlewares/auth.js
   const jwt = require('jsonwebtoken');
   require('dotenv').config();

   module.exports = (allowedRoles) => {
     return (req, res, next) => {
       const token = req.headers.authorization;

       if (!token) {
         return res.status(401).json({ error: 'Unauthorized' });
       }

       try {
         const decoded = jwt.verify(token, process.env.JWT_SECRET);
         const { role } = decoded;

         if (!allowedRoles.includes(role)) {
           return res.status(403).json({ error: 'Forbidden' });
         }

         req.user = decoded;
         next();
       } catch (error) {
         return res.status(401).json({ error: 'Unauthorized' });
       }
     };
   };
   ```

   This middleware checks the user's role against the allowed roles and grants or denies access accordingly.

4. **Secure API Routes with Authorization Middleware:**
   Update `routes/api.js` to use the authorization middleware for specific routes:

   ```javascript
   // routes/api.js
   const express = require('express');
   const router = express.Router();
   const authMiddleware = require('../middlewares/auth');

   // GET /api/users (only accessible by admin)
   router.get('/users', authMiddleware(['admin']), (req, res) => {
     res.json({ message: 'List of users (admin only)' });
   });

   // GET /api/profile (accessible by both user and admin)
   router.get('/profile', authMiddleware(['user', 'admin']), (req, res) => {
     res.json({ message: 'User profile (user and admin)' });
   });

   module.exports = router;
   ```

   In this example, the `/api/users` route is accessible only to users with the 'admin' role, while the `/api/profile` route is accessible to both 'user' and 'admin'.

5. **Update Express Server to Include API Routes:**
   Update `app.js` to include the new API routes:

   ```javascript
   // app.js
   const express = require('express');
   const mongoose = require('mongoose');
   const bodyParser = require('body-parser');
   const jwt = require('jsonwebtoken');
   require('dotenv').config();

   const app = express();
   const PORT = process.env.PORT || 3000;

   // Connect to MongoDB
   mongoose.connect(process.env.MONGO_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });

   // Middleware
   app.use(bodyParser.json());

   // Routes
   const authRoutes = require('./routes/auth');
   const apiRoutes = require('./routes/api');
   app.use('/api/auth', authRoutes);
   app.use('/api', apiRoutes);

   // Start server
   app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```

6. **Test the Authentication and Authorization:**
   Use tools like Postman to test the registration and login endpoints. After successfully logging in, include the generated JWT token in the Authorization header for requests to the protected API routes. Test accessing `/api/profile` with both 'user' and 'admin' roles and accessing `/api/users` with the 'admin' role.

This example demonstrates a basic implementation of user roles and authorization in a Node.js application. Depending on your specific requirements, you might want to enhance this setup, add more roles, or implement additional features like role-based access control (RBAC).

# Intro to MongoDB and Mongoose

MongoDB is a popular NoSQL database that stores data in a flexible, JSON-like format called BSON (Binary JSON). It is designed to handle large amounts of data and scale horizontally across multiple servers. MongoDB is classified as a document-oriented database, and its flexible schema allows for the storage of documents with varying fields and structures.

Key concepts in MongoDB include:

1. **Document:** A document is a basic unit of data in MongoDB, similar to a row in a relational database. Documents are represented in BSON format, which is a binary-encoded serialization of JSON-like documents.

2. **Collection:** A collection is a group of MongoDB documents. It is equivalent to a table in relational databases. Collections do not enforce a specific schema, allowing for flexibility in document structures.

3. **Database:** A database in MongoDB is a container for collections. A MongoDB server can host multiple databases, each with its own set of collections.

4. **Field:** A field is a key-value pair within a document. Fields represent the data attributes of the document.

MongoDB provides a rich set of features, including indexing, sharding for horizontal scaling, and support for geospatial queries. It is widely used in web development, especially in scenarios where a flexible and scalable database solution is needed.

**Mongoose:**
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level, schema-based abstraction over the MongoDB driver, making it easier to interact with MongoDB databases in a Node.js environment.

Key features of Mongoose include:

1. **Schema Definition:** Mongoose allows you to define a schema for your MongoDB documents, specifying the structure of each document and the data types of its fields.

2. **Validation:** Mongoose provides built-in validation for data integrity. You can define validation rules for each field in your schema.

3. **Middleware:** Mongoose supports middleware functions that allow you to execute logic before or after certain database operations, such as saving or querying documents.

4. **Query Building:** Mongoose provides a powerful querying API that allows you to build complex queries using a fluent interface.

5. **Connection Management:** Mongoose handles MongoDB connection management, including connection pooling and reconnection.

Here's a simple example of using Mongoose to define a schema, create a model, and perform basic CRUD (Create, Read, Update, Delete) operations:

```javascript
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
});

// Create a model
const User = mongoose.model('User', userSchema);

// Create a new user
const newUser = new User({
  username: 'john_doe',
  email: 'john@example.com',
  age: 25,
});

// Save the user to the database
newUser.save()
  .then((savedUser) => {
    console.log('User saved:', savedUser);
  })
  .catch((error) => {
    console.error('Error saving user:', error);
  });

// Find all users
User.find()
  .then((users) => {
    console.log('All users:', users);
  })
  .catch((error) => {
    console.error('Error fetching users:', error);
  });
```

In this example, Mongoose is used to define a user schema, create a model, and perform operations such as creating and finding users. The MongoDB connection string (`'mongodb://localhost:27017/mydatabase'`) specifies the database URI, and the `useNewUrlParser` and `useUnifiedTopology` options are used for connection configuration.

# Mongoose Data Models

In Mongoose, data models define the structure and behavior of documents stored in a MongoDB collection. A Mongoose model is a constructor function that corresponds to a specific collection in MongoDB and defines the properties and methods associated with the documents in that collection. Here's a step-by-step guide to working with Mongoose data models:

1. **Define a Schema:**
   A schema is a blueprint that defines the structure of documents in a collection. It specifies the fields, their types, and any validation rules. Here's an example of defining a basic user schema:

   ```javascript
   const mongoose = require('mongoose');

   const userSchema = new mongoose.Schema({
     username: { type: String, required: true },
     email: { type: String, required: true, unique: true },
     age: { type: Number },
   });

   const User = mongoose.model('User', userSchema);
   ```

   In this example, `User` is the Mongoose model for the 'users' collection, and it has fields for `username`, `email`, and `age`.

2. **Create an Instance:**
   Use the model constructor to create instances of documents. Instances represent individual documents that can be saved to the database. For example:

   ```javascript
   const newUser = new User({
     username: 'john_doe',
     email: 'john@example.com',
     age: 25,
   });
   ```

3. **Save to the Database:**
   Once an instance is created, you can save it to the database using the `save` method. This inserts a new document into the associated MongoDB collection:

   ```javascript
   newUser.save()
     .then((savedUser) => {
       console.log('User saved:', savedUser);
     })
     .catch((error) => {
       console.error('Error saving user:', error);
     });
   ```

4. **Query the Database:**
   Mongoose provides a rich set of methods for querying the database. For example, to find all users:

   ```javascript
   User.find()
     .then((users) => {
       console.log('All users:', users);
     })
     .catch((error) => {
       console.error('Error fetching users:', error);
     });
   ```

   You can also use methods like `findOne`, `findById`, and various query operators to retrieve specific documents.

5. **Update and Delete:**
   Mongoose provides methods like `updateOne`, `updateMany`, `deleteOne`, and `deleteMany` for updating and deleting documents. Here's an example of updating a user:

   ```javascript
   User.updateOne({ username: 'john_doe' }, { age: 26 })
     .then((result) => {
       console.log('Update result:', result);
     })
     .catch((error) => {
       console.error('Error updating user:', error);
     });
   ```

   And an example of deleting a user:

   ```javascript
   User.deleteOne({ username: 'john_doe' })
     .then((result) => {
       console.log('Delete result:', result);
     })
     .catch((error) => {
       console.error('Error deleting user:', error);
     });
   ```

6. **Middleware:**
   Mongoose supports middleware functions that allow you to execute logic before or after certain operations. For example, you can use the `pre` and `post` hooks to perform actions before or after saving a document.

   ```javascript
   userSchema.pre('save', function (next) {
     // Logic to execute before saving
     console.log('About to save:', this);
     next();
   });

   userSchema.post('save', function (doc, next) {
     // Logic to execute after saving
     console.log('Saved:', doc);
     next();
   });
   ```

These are some of the fundamental concepts when working with Mongoose data models. Mongoose provides many more features, such as validation, population (referencing other documents), and support for middleware functions. It's important to refer to the official [Mongoose documentation](https://mongoosejs.com/docs/index.html) for a comprehensive guide and reference.

# ASYNC CRUD Operations

When dealing with CRUD (Create, Read, Update, Delete) operations in a Node.js application using Mongoose and MongoDB, asynchronous operations are essential. Node.js is designed to be non-blocking and asynchronous, making it suitable for handling concurrent operations, especially when interacting with databases. Here's an example of how you can perform asynchronous CRUD operations using Mongoose:

1. **Connect to MongoDB:**
   Before performing CRUD operations, establish a connection to your MongoDB database. Here's an example using Mongoose:

   ```javascript
   const mongoose = require('mongoose');

   mongoose.connect('mongodb://localhost:27017/yourdatabase', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });

   const db = mongoose.connection;

   db.on('error', console.error.bind(console, 'MongoDB connection error:'));
   db.once('open', () => {
     console.log('Connected to MongoDB');
   });
   ```

2. **Define a Mongoose Model:**
   Define a Mongoose model for your collection, specifying the schema and any validation rules:

   ```javascript
   const mongoose = require('mongoose');

   const userSchema = new mongoose.Schema({
     username: { type: String, required: true },
     email: { type: String, required: true, unique: true },
     age: { type: Number },
   });

   const User = mongoose.model('User', userSchema);
   ```

3. **Create (Insert) Operation:**
   Perform an asynchronous create operation to insert a new document into the collection:

   ```javascript
   async function createUser(username, email, age) {
     try {
       const newUser = new User({ username, email, age });
       const savedUser = await newUser.save();
       console.log('User created:', savedUser);
     } catch (error) {
       console.error('Error creating user:', error);
     }
   }

   createUser('john_doe', 'john@example.com', 25);
   ```

4. **Read Operation:**
   Perform an asynchronous read operation to fetch documents from the collection:

   ```javascript
   async function findUsers() {
     try {
       const users = await User.find();
       console.log('All users:', users);
     } catch (error) {
       console.error('Error fetching users:', error);
     }
   }

   findUsers();
   ```

5. **Update Operation:**
   Perform an asynchronous update operation to modify existing documents in the collection:

   ```javascript
   async function updateUser(username, newAge) {
     try {
       const result = await User.updateOne({ username }, { age: newAge });
       console.log('Update result:', result);
     } catch (error) {
       console.error('Error updating user:', error);
     }
   }

   updateUser('john_doe', 26);
   ```

6. **Delete Operation:**
   Perform an asynchronous delete operation to remove documents from the collection:

   ```javascript
   async function deleteUser(username) {
     try {
       const result = await User.deleteOne({ username });
       console.log('Delete result:', result);
     } catch (error) {
       console.error('Error deleting user:', error);
     }
   }

   deleteUser('john_doe');
   ```

In this example, the `async/await` syntax is used to handle asynchronous operations more cleanly. Each CRUD operation is wrapped in an asynchronous function, allowing the use of `await` to wait for the operation to complete.

Make sure to handle errors appropriately in a production environment and consider using try/catch blocks to manage asynchronous errors effectively.