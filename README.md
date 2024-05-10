<h1>Simple Node.js Server with Asynchronous Response and CORS Support</h1>
<h2>Requirements</h2>
    <ul><li>Node.js installed on your system</li></ul>

    <h2>Getting Started</h2>
    <ol>
        <li>Clone this repository to your local machine or download the files.</li>
        <li>Navigate to the project directory in your terminal.</li>
        <li>Install dependencies by running the command:<br>
            <code>npm install</code>
        </li>
        <li>Start the server by running the command:<br>
            <code>node server.js</code>
        </li>
        <li>The server should now be running on port 9000.</li>
    </ol>

    <h2>Endpoints</h2>
    <h3>GET /</h3>
    <p>Returns information about the user's CPU and OS.</p>
    <h4>Example Response</h4>
    <pre><code>{
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
}</code></pre>

    <h3>CORS Support</h3>
    <p>Cross-Origin Resource Sharing (CORS) is enabled for all endpoints, allowing requests from any origin.</p>

    <h2>Error Handling</h2>
    <ul>
        <li><strong>404 Not Found</strong>: Returned when the requested URL is not supported.</li>
        <li><strong>405 Method Not Allowed</strong>: Returned when the HTTP method used is not supported.</li>
    </ul>

    <h2>Configuration</h2>
    <ul>
        <li>The server listens on port 9000 by default. You can modify the <code>port</code> variable in <code>server.js</code> to change the port.</li>
        <li>The <code>timeoutDuration</code> variable in <code>server.js</code> determines the maximum delay for simulating asynchronous responses.</li>
    </ul>

    <h2>Notes</h2>
    <p>This server is designed for demonstration purposes and may not be suitable for production use without further enhancements.</p>
