<h1>Simple Node.js Server with Asynchronous Response and CORS Support</h1>
This is a simple Node.js server that provides information about the user's CPU and OS, while also supporting CORS (Cross-Origin Resource Sharing). It handles multiple concurrent requests and simulates asynchronous operations with random delays.
<h2>Requirements</h2>
<ul>Node.js installed on your system</ul>
<h2>Getting Started</h2>
Getting Started
Clone this repository to your local machine or download the files.
Navigate to the project directory in your terminal.
Install dependencies by running the command:
Copy code
npm install
Start the server by running the command:
Copy code
node server.js
The server should now be running on port 9000.
Endpoints
GET /
Returns information about the user's CPU and OS.

Example Response
json
Copy code
{
  "cpu": [{...}],  // Array of CPU information objects
  "uptime": 123456,  // System uptime in seconds
  "machine": "x64",  // Machine architecture
  "version": "11.0.0",  // Node.js version
  "userInfo": {...},  // User information object
  "type": "Darwin",  // OS type
  "totalmem": 17179869184,  // Total system memory in bytes
  "freemem": 581029376,  // Free system memory in bytes
  "release": "20.6.0",  // OS release version
  "platform": "darwin",  // Platform
  "hostname": "localhost",  // Hostname
  "homedir": "/Users/username",  // User's home directory
  "arch": "x64"  // OS architecture
}
CORS Support
Cross-Origin Resource Sharing (CORS) is enabled for all endpoints, allowing requests from any origin.

Error Handling
404 Not Found: Returned when the requested URL is not supported.
405 Method Not Allowed: Returned when the HTTP method used is not supported.
Configuration
The server listens on port 9000 by default. You can modify the port variable in server.js to change the port.
The timeoutDuration variable in server.js determines the maximum delay for simulating asynchronous responses.
Notes
This server is designed for demonstration purposes and may not be suitable for production use without further enhancements.
